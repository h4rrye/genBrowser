import * as THREE from 'three'
import { COLUMNS } from '../renderers/backbone'
import { normalize } from '../renderers/colormap'

const LABELS = ['distance from surface', 'GC content', 'distance from COM', 'distance from rolling mean']
const COLORS = ['#35b779', '#31688e', '#fde725', '#440154']

// Creates the floating panel DOM element
function createPanel(): HTMLDivElement {
  const panel = document.createElement('div')
  panel.style.cssText = `
    position: absolute;
    background: rgba(10,10,30,0.9);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 6px;
    padding: 10px 14px;
    color: white;
    font-family: sans-serif;
    font-size: 12px;
    pointer-events: none;
    display: none;
    min-width: 160px;
  `
  document.body.appendChild(panel)
  return panel
}

function renderBars(panel: HTMLDivElement, values: number[], bead: number) {
  panel.innerHTML = `<div style="margin-bottom:6px;opacity:0.6">Bead ${bead}</div>` +
    LABELS.map((label, i) => {
      const pct = (values[i] * 100).toFixed(1)
      return `
        <div style="margin-bottom:5px">
          <div style="opacity:0.7;margin-bottom:2px">${label}</div>
          <div style="background:rgba(255,255,255,0.1);border-radius:3px;height:10px;width:100%">
            <div style="background:${COLORS[i]};width:${pct}%;height:100%;border-radius:3px"></div>
          </div>
        </div>`
    }).join('')
}

export function initTooltip(
  canvas: HTMLCanvasElement,
  camera: THREE.PerspectiveCamera,
  backbone: THREE.Mesh,
  backboneData: Float32Array,
  state: any
) {
  const panel = createPanel()
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()

  // Pre-normalize all 4 columns once
  const normalized = Object.values(COLUMNS).map(colIdx => {
    const vals = new Float32Array(backboneData.length / 7)
    for (let i = 0; i < vals.length; i++) vals[i] = backboneData[i * 7 + colIdx]
    return normalize(vals)
  })

  canvas.addEventListener('mousemove', e => {
    if (!state.showTooltip) { panel.style.display = 'none'; return }

    mouse.x =  (e.clientX / window.innerWidth)  * 2 - 1
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1

    raycaster.setFromCamera(mouse, camera)
    const hits = raycaster.intersectObject(backbone)

    if (hits.length === 0) { panel.style.display = 'none'; return }

    // Map hit point to nearest bead index
    const beadIndex = Math.min(
        Math.floor((hits[0].faceIndex! / (backbone.geometry.index!.count / 3)) * (backboneData.length / 7)),
        backboneData.length / 7 - 1
    )

    const values = normalized.map(col => col[beadIndex])
    renderBars(panel, values, beadIndex)

    panel.style.display = 'block'
    panel.style.left = `${e.clientX + 16}px`
    panel.style.top  = `${e.clientY - 10}px`
  })

  canvas.addEventListener('mouseleave', () => { panel.style.display = 'none' })
}
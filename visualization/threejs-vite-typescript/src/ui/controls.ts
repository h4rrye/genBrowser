import GUI from 'lil-gui'
import * as THREE from 'three'
import { updateColors, COLUMNS } from '../renderers/backbone'

export function initControls(backbone: THREE.Mesh, surface: THREE.Points, data: Float32Array, _group: THREE.Group) {
  const gui = new GUI({ title: 'Controls' })
  gui.domElement.style.position = 'absolute'
  gui.domElement.style.top = '100px'
  gui.domElement.style.right = '20px'

  const state = { colorBy: 'dist_surf', showSurface: true, showBackbone: true, rotationSpeed: 2.0, showTooltip: true, isAnimating: false }

  gui.add(state, 'showTooltip').name('Show tooltip')

  gui.add(state, 'colorBy', Object.keys(COLUMNS)).name('Color by').onChange((col: string) => {
    updateColors(backbone, data, COLUMNS[col as keyof typeof COLUMNS])
  })

  gui.add(state, 'showSurface').name('Show surface').onChange((v: boolean) => {
    surface.visible = v
  })

  gui.add(state, 'showBackbone').name('Show chromosome').onChange((v: boolean) => {
    backbone.visible = v
  })

  gui.add(state, 'isAnimating').name('Animate')
  gui.add(state, 'rotationSpeed', 0, 50, 0.01).name('Rotation speed')

  return state
}
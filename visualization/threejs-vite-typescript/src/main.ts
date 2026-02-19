import * as THREE from 'three'
import { TrackballControls } from 'three/addons/controls/TrackballControls.js'
import { loadBin } from './data/loader'
import { createBackbone } from './renderers/backbone'
import { createSurface } from './renderers/surface'
import { initControls } from './ui/controls'
import { initLegend } from './ui/legend'
import { initTooltip } from './ui/tooltip'
import { createStarfield } from './renderers/starfield'

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

const scene = new THREE.Scene()
;(window as any).scene = scene
scene.background = new THREE.Color(0x161617)
const starfield = createStarfield()
scene.add(starfield)
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 3)

scene.add(new THREE.AmbientLight(0xffffff, 0.5))
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(50, 50, 50)
scene.add(light)

initLegend()

const controls = new TrackballControls(camera, canvas)
controls.rotateSpeed = 5.0

const group = new THREE.Group()
scene.add(group)

let state: any

Promise.all([loadBin('/data/backbone.bin'), loadBin('/data/surface.bin')]).then(([backboneData, surfaceData]) => {
  const backbone = createBackbone(backboneData)
  const surface = createSurface(surfaceData)

  group.add(backbone)
  group.add(surface)
  group.rotation.set(0, -1.2, -0.12)

  state = initControls(backbone, surface, backboneData, group)
  initTooltip(canvas, camera, backbone, backboneData, state)
})

function animate() {
  requestAnimationFrame(animate)
  // if (state) group.rotation.y += state.rotationSpeed * 0.005
  controls.update()
  renderer.render(scene, camera)
  if (state && state.isAnimating) {
    group.rotation.x += state.rotationSpeed * 0.001
    group.rotation.y += state.rotationSpeed * 0.003
    group.rotation.z += state.rotationSpeed * 0.0004
  }
}
animate()
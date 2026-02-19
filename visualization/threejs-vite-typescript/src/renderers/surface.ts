import * as THREE from 'three'

function createSoftSprite(): THREE.Texture {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 64
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)
  return new THREE.CanvasTexture(canvas)
}

export function createSurface(data: Float32Array): THREE.Points {
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(data, 3))
  geometry.computeBoundingBox()
  geometry.center()
  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.03,
    map: createSoftSprite(),
    transparent: true,
    depthWrite: false,
    opacity: 0.1
  })
  return new THREE.Points(geometry, material)
}
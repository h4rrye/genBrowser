import * as THREE from 'three'
import { toColor, normalize } from './colormap'

export const COLUMNS = { dist_surf: 3, gc_content: 4, dist_com: 5, dist_rm: 6 }

export function createBackbone(data: Float32Array): THREE.Mesh {
  const points: THREE.Vector3[] = []
  for (let i = 0; i < data.length; i += 7)
    points.push(new THREE.Vector3(data[i], data[i+1], data[i+2]))

  const curve = new THREE.CatmullRomCurve3(points)
  const geometry = new THREE.TubeGeometry(curve, 1400, 0.03, 20, false)
  const material = new THREE.MeshPhongMaterial({ vertexColors: true })
  const mesh = new THREE.Mesh(geometry, material)

  geometry.computeBoundingBox()
  geometry.center()

  updateColors(mesh, data, COLUMNS.dist_surf)
  return mesh
}

export function updateColors(mesh: THREE.Mesh, data: Float32Array, colIndex: number) {
  const values = new Float32Array(data.length / 7)
  for (let i = 0; i < values.length; i++) values[i] = data[i * 7 + colIndex]

  const normalized = normalize(values)
  const position = mesh.geometry.getAttribute('position')
  const colors = new Float32Array(position.count * 3)

  for (let i = 0; i < position.count; i++) {
    const t = i / position.count
    const beadIndex = Math.min(Math.floor(t * normalized.length), normalized.length - 1)
    const color = toColor(normalized[beadIndex])
    colors[i * 3]     = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  mesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
}
import * as THREE from 'three'

// Viridis colormap — samples 5 control points and linearly interpolates between them
const VIRIDIS = [
  [0.267, 0.005, 0.329],
  [0.190, 0.407, 0.553],
  [0.128, 0.566, 0.551],
  [0.204, 0.714, 0.474],
  [0.993, 0.906, 0.144],
]

export function toColor(t: number): THREE.Color {
  const s = t * (VIRIDIS.length - 1)
  const i = Math.min(Math.floor(s), VIRIDIS.length - 2)
  const f = s - i
  return new THREE.Color(
    VIRIDIS[i][0] + f * (VIRIDIS[i+1][0] - VIRIDIS[i][0]),
    VIRIDIS[i][1] + f * (VIRIDIS[i+1][1] - VIRIDIS[i][1]),
    VIRIDIS[i][2] + f * (VIRIDIS[i+1][2] - VIRIDIS[i][2]),
  )
}

// Normalizes a Float32Array to 0-1 range
export function normalize(arr: Float32Array): Float32Array {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return arr.map(v => (v - min) / (max - min)) as Float32Array
}
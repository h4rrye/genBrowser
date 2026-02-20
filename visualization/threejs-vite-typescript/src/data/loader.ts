// Fetches a .bin file and returns a Float32Array
export async function loadBin(path: string): Promise<Float32Array> {
  const buffer = await fetch(import.meta.env.BASE_URL + path).then(r => r.arrayBuffer())
  return new Float32Array(buffer)
}
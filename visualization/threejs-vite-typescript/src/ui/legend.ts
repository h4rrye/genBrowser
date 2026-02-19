// Draws a right-angle triangle legend with viridis gradient on an HTML canvas
export function initLegend() {
    const canvas = document.createElement('canvas')
    canvas.width = 200
    canvas.height = 80
    canvas.style.cssText = 'position:absolute; bottom:30px; right:20px;'
    document.body.appendChild(canvas)
  
    const ctx = canvas.getContext('2d')!
  
    // Viridis gradient left → right
    const gradient = ctx.createLinearGradient(0, 0, 200, 0)
    gradient.addColorStop(0,    '#440154')
    gradient.addColorStop(0.25, '#31688e')
    gradient.addColorStop(0.5,  '#21918c')
    gradient.addColorStop(0.75, '#35b779')
    gradient.addColorStop(1,    '#fde725')
  
    // Right-angle triangle: bottom-left, bottom-right, top-right
    ctx.beginPath()
    ctx.moveTo(0, 70)
    ctx.lineTo(190, 70)
    ctx.lineTo(190, 0)
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.fill()
  
    // Labels
    ctx.fillStyle = 'white'
    ctx.font = '11px sans-serif'
    ctx.fillText('Low', 0, 80)
    ctx.fillText('High', 165, 80)
  }
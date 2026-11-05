// Deterministic vector studies: decorative illustrations, not project results.
const ns = 'http://www.w3.org/2000/svg';
function svgNode(parent, tag, attributes) {
  const element = document.createElementNS(ns, tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  parent.appendChild(element);
}
const landscape = document.querySelector('#signal-lines');
for (let row = 0; row < 32; row++) {
  let d = '';
  for (let x = 0; x <= 400; x += 4) {
    const envelope = Math.exp(-(((x - 220) / 107) ** 2));
    const y = 84 + row * 4.65 - envelope * (40 * Math.sin(x / 49 + row * .115) + 25 * Math.sin(x / 25 - row * .055));
    d += `${x === 0 ? 'M' : 'L'}${x + 10} ${y.toFixed(2)} `;
  }
  svgNode(landscape, 'path', {d, fill: 'none', stroke: '#6d805d', 'stroke-width': .85, opacity: .4 + row / 65});
}

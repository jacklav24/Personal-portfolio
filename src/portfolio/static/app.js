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
const waveform = document.querySelector('#waveform');
for (let i = 0; i < 100; i++) {
  const x = 26 + i * 4.7;
  const envelope = Math.sin(i / 100 * Math.PI) ** 1.3;
  const amplitude = 5 + envelope * (13 + Math.abs(Math.sin(i * .73) * Math.cos(i * .13)) * 60);
  svgNode(waveform, 'line', {x1: x, x2: x, y1: 91 - amplitude, y2: 91 + amplitude, stroke: 'currentColor', 'stroke-width': 1.6, opacity: .8});
}
const scatter = document.querySelector('#scatter');
for (let i = 0; i < 30; i++) {
  const x = 40 + i * 15;
  const y = 139 - i * 3.5 + Math.sin(i * 2.4) * 23;
  svgNode(scatter, 'circle', {cx: x, cy: y, r: 3, fill: 'currentColor', opacity: .45});
}


sla();
function sla () {
  const PALETTE_COLORS = document.getElementsByTagName('th');
  for (let index of PALETTE_COLORS) {
    console.log(index)
    console.log(index.className);
    index.style.backgroundColor = index.className;
  }
}
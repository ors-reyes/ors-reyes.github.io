const canvas = document.getElementById("matrix");
const intensidad = 11
const tamano = 8
const ctx = canvas.getContext("2d");
const w = (canvas.width = document.body.offsetWidth);
const h = (canvas.height = document.body.offsetHeight);
const cols = Math.floor(w / intensidad) + 1;
const ypos = Array(cols).fill(0);
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);
function matrix() {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "rgba(0,217,214, 0.5)";
    ctx.font = `${tamano}pt monospace`;
    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * intensidad;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else
            ypos[ind] = y + intensidad;
    });
}
setInterval(matrix, 100);
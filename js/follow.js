let cursor = document.querySelector('.tooltips');
console.log(cursor)
document.addEventListener('mousemove', (e)=>{
    let x = e.clientX
    let y = e.clientY
    cursor.style.left = (x + 10) + 'px'
    cursor.style.top = (y - 50) + 'px'
})
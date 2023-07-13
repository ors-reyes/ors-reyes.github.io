const progressbar = document.getElementById('progressbar')
// const scrollpath = document.getElementById('scrollpath')
const percent = document.getElementById('percent')

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progress + '%'
    percent.innerHTML = Math.round(progress) + '%'
}
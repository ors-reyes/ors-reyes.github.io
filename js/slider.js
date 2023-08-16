const slides = document.querySelector('.slides')
function next(){
  let firstSlide = document.querySelectorAll('.slide')[0]
  slides.style.marginLeft = '-100%'
  slides.style.transition = 'all 0.5s'
  setTimeout(function(){
    slides.style.transition = 'none'
    slides.insertAdjacentElement('beforeend', firstSlide)
    slides.style.marginLeft = '0'
  },500)
}
// const btnNext = document.querySelector('.btnRight')
// btnNext.addEventListener('click', ()=>next())

const play = ()=>{
    setInterval(()=> next() ,12000)
}
play()


// Intersection Observer
 const boxes = document.querySelectorAll('.boxes')
 const observer = new IntersectionObserver((entries)=>{
     entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.children[0].classList.remove('noPlay')
            entry.target.children[0].classList.add('play')
        }else{
            entry.target.children[0].classList.add('noPlay')
            entry.target.children[0].classList.remove('play')
        }
    });
 }, {threshold: 0.8})
 boxes.forEach((box)=>observer.observe(box))


 
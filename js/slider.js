let sliderContenedor = document.getElementById('sliderContenedor')
let allSlider = sliderContenedor.querySelectorAll('.sliderItem')
let allSliderLength = allSlider.length
let next = sliderContenedor.nextElementSibling
let prev = sliderContenedor.nextElementSibling.nextElementSibling
next.addEventListener('click', ()=> press('next'))
prev.addEventListener('click', ()=> press('prev'))
let slideWhidth = allSlider[0].offsetWidth
const sl1 = allSlider[0]
const sl9 = allSlider[allSlider.length-1]
const clonSl1 = sl1.cloneNode(true)
const clonSl9 = sl9.cloneNode(true)
sliderContenedor.appendChild(clonSl1)
sliderContenedor.insertBefore(clonSl9, sl1)
let index = 0
let pos1
let pos2
let posInicial
let posFinal
let habilitado = true
let velocidad = 7000
sliderContenedor.addEventListener('mousedown', iniciaMover)
sliderContenedor.addEventListener('touchstart', iniciaMover)
sliderContenedor.addEventListener('touchmove', moviendo)
sliderContenedor.addEventListener('touchend', soltar)

sliderContenedor.addEventListener('mouseenter', () => {
    next.style.opacity = '0.5'
    prev.style.opacity = '0.5'
})
sliderContenedor.addEventListener('mouseleave', () => {
    next.style.opacity = '0'
    prev.style.opacity = '0'
})
next.addEventListener('mouseenter', () => {
    next.style.opacity = '1'
})
next.addEventListener('mouseleave', () => {
    next.style.opacity = '0.5'
})
prev.addEventListener('mouseenter', () => {
    prev.style.opacity = '1'
})
prev.addEventListener('mouseleave', () => {
    prev.style.opacity = '0.5'
})

function iniciaMover (e){
    e.preventDefault()
    posInicial = sliderContenedor.offsetLeft
    if(e.type == 'touchstart'){
        pos1 = e.touches[0].clientX
    }else{
        pos1 = e.clientX
        document.onmouseup = soltar
        document.onmousemove = moviendo
    }
}
function moviendo (e){
    if(e.type == 'touchmove'){
        pos2 = pos1 - e.touches[0].clientX
        pos1 = e.touches[0].clientX
    }else{
        pos2 = pos1 - e.clientX
        pos1 = e.clientX
    }
    sliderContenedor.style.marginLeft = `${sliderContenedor.offsetLeft - pos2}px`
}
function soltar (){
    posFinal = sliderContenedor.offsetLeft
    let margen = posFinal - posInicial
    if(margen >= -5 && margen <= 5){
        sliderContenedor.style.marginLeft = `${posInicial}px`
    }else if(margen < -6){
        press('next', 'pixelesMovidos')
    }else if(margen > 6){
        press('prev', 'pixelesMovidos')
    }else{}
    document.onmouseup = null
    document.onmousemove = null
}
const press = (arg, arg2)=>{
    sliderContenedor.classList.add('transition')
    if(habilitado){
        if(!arg2){
            posInicial = sliderContenedor.offsetLeft
        }
        if(arg == 'next'){
            clearInterval(play)
            sliderContenedor.style.marginLeft = `${posInicial - slideWhidth}px`
            index++
            play = setInterval(press, velocidad, 'next')
        }else{
            clearInterval(play)
            sliderContenedor.style.marginLeft = `${posInicial + slideWhidth}px`
            index--
            play = setInterval(press, velocidad, 'next')
        }
        habilitado = false
    }
}
sliderContenedor.addEventListener('transitionend', checkIndex)
function checkIndex(){
    sliderContenedor.classList.remove('transition')
    if(index == allSliderLength){
        sliderContenedor.style.marginLeft= `-${1 * slideWhidth}px`
        index = 0
    }
    if(index == -1){
        sliderContenedor.style.marginLeft= `-${allSliderLength * slideWhidth}px`
        index = allSliderLength-1
    }
    habilitado = true
}
let play = setInterval(press, velocidad, 'next')
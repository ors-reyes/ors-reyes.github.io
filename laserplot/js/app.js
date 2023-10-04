const secciones = document.querySelectorAll('.contenedor section')
const inicio = `#${secciones[0].id}`
const fin = `#${secciones[secciones.length-1].id}`
const navContenedor = document.querySelector('nav')
const header = document.querySelector('header')
const navIcons = document.querySelectorAll('nav a')
const indicador = document.querySelector('.indicador')

const navObserver = new IntersectionObserver((entradas)=>{
    navContenedor.style.left = '0px'
    navContenedor.style.transition = 'all 1s'
    navContenedor.style.transitionDelay = '0.5s'
    header.style.top = '0px'
    header.style.transition = 'all 1s'
    entradas.forEach(entrada =>{
        let contSection = entrada.target.children[0]
        contSection.classList.remove("ver")
        contSection.style.display = 'none'
        if(entrada.isIntersecting){
            const id = `#${entrada.target.id}`
            if(inicio === id || fin === id){
                navContenedor.style.left = '-140px'
                navContenedor.style.transition = 'all 0.3s'
                header.style.top = '-200px'
                header.style.transition = 'all 0.3s'
            }
            history.pushState({}, entrada.target.innetText, id)
            navIcons.forEach(navIcon =>{
                navIcon.children[0].classList.remove("activeNav")
                if(navIcon.hash === id){
                    let titulo = contSection.children[1].classList
                    let imgSVG = contSection.children[2].children[0].classList
                    let seccionNAV = contSection.children[3].children
                    console.log(seccionNAV)
                    imgSVG.remove("verTitulo")
                    setTimeout(() => {
                        contSection.style.display = 'block'
                        titulo.add("verTitulo")
                        setTimeout(()=>imgSVG.add("verTitulo"),500)
                    }, 500);
                    setTimeout(()=>contSection.classList.add("ver"),800);
                    navIcon.children[0].classList.add("activeNav")
                    let altura = navIcon.getBoundingClientRect().top
                    indicador.style.transform = `translateY(${altura - 70}px)`
                }
            })
        }
    })
},{
    rootMargin: '0px 0px 50% 0px',
    threshold: 0.5
});
secciones.forEach(secciones =>{
    navObserver.observe(secciones)
})
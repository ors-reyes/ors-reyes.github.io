const secciones = document.querySelectorAll('.contenedor section')
const inicio = `#${secciones[0].id}`
const fin = `#${secciones[secciones.length-1].id}`
const navContenedor = document.querySelector('nav')
const header = document.querySelector('header')
const navIcons = document.querySelectorAll('nav a')
const navObserver = new IntersectionObserver((entradas)=>{
    navContenedor.style.left = '0px'
    navContenedor.style.transition = 'all 1s'
    navContenedor.style.transitionDelay = '1s'
    header.style.top = '0px'
    header.style.transition = 'all 1s'
    entradas.forEach(entrada =>{
        if(entrada.isIntersecting){
            const id = `#${entrada.target.id}`
            if(inicio === id || fin === id){
                navContenedor.style.left = '-70px'
                navContenedor.style.transition = 'all 0.3s'
                header.style.top = '-60px'
                header.style.transition = 'all 0.3s'
            }
            history.pushState({}, entrada.target.innetText, id)
            navIcons.forEach(navIcon =>{
                navIcon.children[0].classList.remove("activeNav")
                if(navIcon.hash === id){
                    navIcon.children[0].classList.add("activeNav")
                }
            })
        }
    })
},{
    rootMargin: '0px 0px -50% 0px',
    threshold: 0.5
});
secciones.forEach(secciones =>{
    navObserver.observe(secciones)
})
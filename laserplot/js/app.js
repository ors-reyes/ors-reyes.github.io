const secciones = document.querySelectorAll('.contenedor section')
const inicio = `#${secciones[0].id}`
const fin = `#${secciones[secciones.length-1].id}`
const navContenedor = document.querySelector('nav')
const header = document.querySelector('header')
const navIcons = document.querySelectorAll('nav a')
const indicador = document.querySelector('.indicador')

const navObserver = new IntersectionObserver((entradas)=>{
    navContenedor.classList.add('navActivo')
    header.classList.add('headerActivo')
    // header.style.top = '0px'
    entradas.forEach(entrada =>{
        let contSection = entrada.target.children[0]
        contSection.classList.remove("ver")
        contSection.style.display = 'none'
        if(entrada.isIntersecting){
            const id = `#${entrada.target.id}`
            if(inicio === id || fin === id){
                navContenedor.classList.remove('navActivo')
                header.classList.remove('headerActivo')
                // header.style.top = '-200px'
        }else{
            let titulo = contSection.querySelector('.titulo')
            let imgSecc = contSection.querySelectorAll('.contenido .conteImg')
            let navSecc = contSection.querySelector('.navSecc')
            let navBtn = navSecc.querySelectorAll('.navIten')
            navBtn.forEach((btn, index) =>{
                btn.addEventListener('click', ()=>{
                    imgSecc.forEach(dis =>{
                        dis.style.display = 'none'
                        // setTimeout(()=> dis.style.display = 'none',500)
                    })
                    navBtn.forEach(rem =>{
                        rem.classList.remove('act')
                    })
                    btn.classList.add('act')
                    // setTimeout(()=> imgSecc[index].style.display = 'block',500)
                    imgSecc[index].style.display = 'block'
                    imgSecc[index].classList.add('derechaDeley')
                })
            })

            titulo.classList.add('derecha')
            // imgSecc.classList.remove('derecha')
            // setTimeout(()=>imgSecc.classList.add('derecha'),1500)
            navSecc.classList.remove('abajo')
            setTimeout(()=>navSecc.classList.add('abajo'),3000)
        }
            history.pushState({}, entrada.target.innetText, id)
            navIcons.forEach(navIcon =>{
                navIcon.children[0].classList.remove("activeNav")
                if(navIcon.hash === id){
                    setTimeout(() => {
                        contSection.style.display = 'block'
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
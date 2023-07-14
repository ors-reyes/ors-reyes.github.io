const iconImg = document.querySelector('.iconImg')

const mante = document.getElementById('mante')
const btnMante = document.getElementById('btnMante')
const manteText = document.getElementById('manteText')

const repara = document.getElementById('repara')
const reparaText = document.getElementById('reparaText')
const btnRepara = document.getElementById('btnRepara')

const insumos = document.getElementById('insumos')
const insumosText = document.getElementById('insumosText')
const btnInsumos = document.getElementById('btnInsumos')

const redes = document.getElementById('redes')
const redesText = document.getElementById('redesText')
const btnRedes = document.getElementById('btnRedes')

const cctv = document.getElementById('cctv')
const cctvText = document.getElementById('cctvText')
const btnCctv = document.getElementById('btnCctv')

const web = document.getElementById('web')
const webText = document.getElementById('webText')
const btnWeb = document.getElementById('btnWeb')


let bmante = 0, brepara = 0, binsumos = 0, bredes = 0, bcctv = 0, bweb = 0;

/**** mante ****/
mante.addEventListener("click", () =>{
    btnMante.classList.toggle('iconTxtV')
    mante.classList.toggle('iconImgV')    
    if(bmante===0){
        bmante++
        let write = srt =>{
            let array = srt.split('')
            manteText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    manteText.innerHTML+= array[i]
                    manteText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    manteText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Un servicio que conoce integralmente sus equipos puede darle soluciones globales para hacer más eficiente su empresa.')
    }
})
/**** repara ****/
repara.addEventListener("click", () =>{
    btnRepara.classList.toggle('iconTxtV')
    repara.classList.toggle('iconImgV')    
    if(brepara===0){
        brepara++
        let write = srt =>{
            let array = srt.split('')
            reparaText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    reparaText.innerHTML+= array[i]
                    reparaText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    reparaText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Reparación de PC acorde a las necesidades de su empresa, garantizamos un buen rendimiento de sus computadoras y mejorar sus tareas.')
    }
})
/**** insumos ****/
insumos.addEventListener("click", () =>{
    btnInsumos.classList.toggle('iconTxtV')
    insumos.classList.toggle('iconImgV')    
    if(binsumos===0){
        binsumos++
        let write = srt =>{
            let array = srt.split('')
            insumosText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    insumosText.innerHTML+= array[i]
                    insumosText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    insumosText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Insumos informáticos. Restablecer tus equipos informáticos: portátiles, impresoras, etiquetadoras, etc.')
    }
})
/**** redes ****/
redes.addEventListener("click", () =>{
    btnRedes.classList.toggle('iconTxtV')
    redes.classList.toggle('iconImgV')    
    if(bredes===0){
        bredes++
        let write = srt =>{
            let array = srt.split('')
            redesText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    redesText.innerHTML+= array[i]
                    redesText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    redesText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Brindamos servicios de diagnóstico, diseño, reparación, integración y elaboración de presupuestos en proyecto de cableado estructurado.')
    }
})
/**** cctv ****/
cctv.addEventListener("click", () =>{
    btnCctv.classList.toggle('iconTxtV')
    cctv.classList.toggle('iconImgV')    
    if(bcctv===0){
        bcctv++
        let write = srt =>{
            let array = srt.split('')
            cctvText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    cctvText.innerHTML+= array[i]
                    cctvText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    cctvText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur .')
    }
})
/**** web ****/
web.addEventListener("click", () =>{
    btnWeb.classList.toggle('iconTxtV')
    web.classList.toggle('iconImgV')    
    if(bweb===0){
        bweb++
        let write = srt =>{
            let array = srt.split('')
            webText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    webText.innerHTML+= array[i]
                    webText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    webText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur .')
    }
})
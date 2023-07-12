const iconImg = document.querySelector('.iconImg')

const express = document.getElementById('express')
const iconExpres = document.getElementById('iconExpres')
const expressText = document.getElementById('expressText')

const farmacia = document.getElementById('farmacia')
const farmaciaText = document.getElementById('farmaciaText')
const iconFarmacia = document.getElementById('iconFarmacia')

const documentos = document.getElementById('documentos')
const documentosText = document.getElementById('documentosText')
const iconDocumentos = document.getElementById('iconDocumentos')

const viveres = document.getElementById('viveres')
const viveresText = document.getElementById('viveresText')
const iconViveres = document.getElementById('iconViveres')
let bExpress = 0;let bFarmacia = 0;let bDocumentos = 0;let bViveres = 0;

/**** express ****/
express.addEventListener("click", () =>{
    iconExpres.classList.toggle('iconTxtV')
    express.classList.toggle('iconImgV')    
    if(bExpress===0){
        bExpress++
        let write = srt =>{
            let array = srt.split('')
            expressText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    expressText.innerHTML+= array[i]
                    expressText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    expressText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Express variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.')
    }
})
/**** farmacia ****/
farmacia.addEventListener("click", () =>{
    iconFarmacia.classList.toggle('iconTxtV')
    farmacia.classList.toggle('iconImgV')    
    if(bFarmacia===0){
        bFarmacia++
        let write = srt =>{
            let array = srt.split('')
            farmaciaText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    farmaciaText.innerHTML+= array[i]
                    farmaciaText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    farmaciaText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Farmacia variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.')
    }
})
/**** documentos ****/
documentos.addEventListener("click", () =>{
    iconDocumentos.classList.toggle('iconTxtV')
    documentos.classList.toggle('iconImgV')    
    if(bDocumentos===0){
        bDocumentos++
        let write = srt =>{
            let array = srt.split('')
            documentosText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    documentosText.innerHTML+= array[i]
                    documentosText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    documentosText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Documentos variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.')
    }
})
/**** viveres ****/
viveres.addEventListener("click", () =>{
    iconViveres.classList.toggle('iconTxtV')
    viveres.classList.toggle('iconImgV')    
    if(bViveres===0){
        bViveres++
        let write = srt =>{
            let array = srt.split('')
            viveresText.innerHTML = ""
            let i = 0
            let print = setInterval(()=>{
                if (array[i] === ' '){
                    viveresText.innerHTML+= array[i]
                    viveresText.innerHTML+= array[i + 1]
                    i  += 2
                }else{
                    viveresText.innerHTML += array[i]
                    i++
                }
                if(i === array.length) 
                    clearInterval(print) 
                },12)
        }
    write('Viveres variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.')
    }
})
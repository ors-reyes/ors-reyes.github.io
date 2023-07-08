window.addEventListener("load", function() {
    const svg = document.getElementById('imgrrss').contentDocument
    const clickTelefono = svg.querySelector('.clickTelef')
    const telefono = svg.querySelector('.strokeTelef')
    const clickFace = svg.querySelector('.clickFace')
    const face = svg.querySelector('.strokeFace')
    const clickInsta = svg.querySelector('.clickInsta')
    const inst = svg.querySelector('.strokeInsta')
    const clickWhast = svg.querySelector('.clickWhast')
    const what = svg.querySelector('.strokeWhast')
    
    const txtTigo = svg.querySelector('.txtTigo')
    const txtFace = svg.querySelector('.txtFace')
    const txtInsta = svg.querySelector('.txtInsta')
    const txtWhast = svg.querySelector('.txtWhast')
    
    const iconTelef = svg.querySelector('.iconTelef')
    const iconFace = svg.querySelector('.iconFace')
    const iconInst = svg.querySelector('.iconInst')
    const iconWhas = svg.querySelector('.iconWhas')

    const fndTelef = svg.querySelector('.fndTelef')
    const fndFace = svg.querySelector('.fndFace')
    const fndInst = svg.querySelector('.fndInst')
    const fndWhast = svg.querySelector('.fndWhast')

    const lineaPhone = svg.querySelector('.lineaPhone')
    const lineaWhas = svg.querySelector('.lineaWhas')
    const lineaFace = svg.querySelector('.lineaFace')
    const lineaInsta = svg.querySelector('.lineaInsta')
    
    clickTelefono.addEventListener('click', ()=>{
        telefono.classList.add('activo')
        face.classList.remove('activo')
        inst.classList.remove('activo')
        what.classList.remove('activo')
        
        txtTigo.classList.add('activoTXT')
        txtFace.classList.remove('activoTXT')
        txtInsta.classList.remove('activoTXT')
        txtWhast.classList.remove('activoTXT')

        iconTelef.classList.add('activoICON')
        iconFace.classList.remove('activoICON')
        iconInst.classList.remove('activoICON')
        iconWhas.classList.remove('activoICON')

        fndTelef.classList.add('activoTXT')
        fndFace.classList.remove('activoTXT')
        fndInst.classList.remove('activoTXT')
        fndWhast.classList.remove('activoTXT')

        lineaPhone.classList.add('lineaExtre')
        lineaFace.classList.remove('lineaInter')
        lineaInsta.classList.remove('lineaInter')
        lineaWhas.classList.remove('lineaExtre')
    })
    clickFace.addEventListener('click', ()=>{
        face.classList.add('activo')
        telefono.classList.remove('activo')
        inst.classList.remove('activo')
        what.classList.remove('activo')

        txtFace.classList.add('activoTXT')
        txtTigo.classList.remove('activoTXT')
        txtInsta.classList.remove('activoTXT')
        txtWhast.classList.remove('activoTXT')
        
        iconFace.classList.add('activoICON')
        iconTelef.classList.remove('activoICON')
        iconInst.classList.remove('activoICON')
        iconWhas.classList.remove('activoICON')
        
        fndFace.classList.add('activoTXT')
        fndTelef.classList.remove('activoTXT')
        fndInst.classList.remove('activoTXT')
        fndWhast.classList.remove('activoTXT')

        lineaFace.classList.add('lineaInter')
        lineaPhone.classList.remove('lineaExtre')
        lineaInsta.classList.remove('lineaInter')
        lineaWhas.classList.remove('lineaExtre')
    })
    clickInsta.addEventListener('click', ()=>{
        inst.classList.add('activo')
        telefono.classList.remove('activo')
        face.classList.remove('activo')
        what.classList.remove('activo')

        txtInsta.classList.add('activoTXT')
        txtTigo.classList.remove('activoTXT')
        txtFace.classList.remove('activoTXT')
        txtWhast.classList.remove('activoTXT')

        iconInst.classList.add('activoICON')
        iconTelef.classList.remove('activoICON')
        iconFace.classList.remove('activoICON')
        iconWhas.classList.remove('activoICON')

        fndInst.classList.add('activoTXT')
        fndTelef.classList.remove('activoTXT')
        fndFace.classList.remove('activoTXT')
        fndWhast.classList.remove('activoTXT')

        lineaInsta.classList.add('lineaInter')
        lineaPhone.classList.remove('lineaExtre')
        lineaFace.classList.remove('lineaInter')
        lineaWhas.classList.remove('lineaExtre')
    })
    clickWhast.addEventListener('click', ()=>{
        what.classList.add('activo')
        telefono.classList.remove('activo')
        face.classList.remove('activo')
        inst.classList.remove('activo')
        
        txtWhast.classList.add('activoTXT')
        txtTigo.classList.remove('activoTXT')
        txtFace.classList.remove('activoTXT')
        txtInsta.classList.remove('activoTXT')

        iconWhas.classList.add('activoICON')
        iconTelef.classList.remove('activoICON')
        iconFace.classList.remove('activoICON')
        iconInst.classList.remove('activoICON')

        fndWhast.classList.add('activoTXT')
        fndTelef.classList.remove('activoTXT')
        fndFace.classList.remove('activoTXT')
        fndInst.classList.remove('activoTXT')

        lineaWhas.classList.add('lineaExtre')
        lineaPhone.classList.remove('lineaExtre')
        lineaFace.classList.remove('lineaInter')
        lineaInsta.classList.remove('lineaInter')
    })
});
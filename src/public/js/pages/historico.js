const historico = document.querySelector('#historico')

if(historico){
   historico.addEventListener('click',()=>{
    fetch('/historico').then((res)=>{
        if(res.ok){
             window.location.href = '/historico'
         }
    }).catch((err)=>{
        console.log(err)
    })

   })
}


const voltar = document.querySelector('#voltar')

if(voltar){
    voltar.addEventListener('click',()=>{
        window.location.href = '/'
    })
}
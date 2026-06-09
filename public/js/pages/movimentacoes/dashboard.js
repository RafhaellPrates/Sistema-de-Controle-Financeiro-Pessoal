const adicionar = document.querySelector('#adicionar')

if(adicionar){
    adicionar.addEventListener('click',()=>{
        window.location.href = '/nova'
    })
}
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
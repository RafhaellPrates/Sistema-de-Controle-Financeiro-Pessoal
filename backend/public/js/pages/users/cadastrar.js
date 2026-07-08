
const cadastrar = document.querySelector('#cadastrar')

if(cadastrar){

    cadastrar.addEventListener('submit',(event)=>{

        event.preventDefault()

        const nome = document.querySelector('#nome').value
        const email = document.querySelector('#email').value
        const senha = document.querySelector('#senha').value


       
        fetch('/register',{
            method:'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({
                nome,
                email,
                senha
            })
        }).then((res)=>{
            if(!res.ok){
                return res.json().then((dados)=>{
                    alert(dados.erros)
                })
            }else{
                window.location.href = '/login'
            }

        }).catch((err)=>{
            console.log(err)
        })
    })
}
const login = document.querySelector('#login')

if(login){
    login.addEventListener('click',()=>{
        window.location.href = '/login'
    })
}

const logar = document.querySelector('#logar')

if (logar){

    logar.addEventListener('submit',(event)=>{

        event.preventDefault()

        const email = document.querySelector('#email').value
        const senha = document.querySelector('#senha').value

        fetch('/login',{
            method:'POST',
            headers:{'Content-type' : 'application/json'},
            body: JSON.stringify({
                email,
                senha
            })
        }).then((res)=>{
                if(!res.ok){
                   return res.json().then((dados)=>{
                        alert(dados.erros)
                    })
                }else{
                    window.location.href = '/dashboard'
                }
            })
        
        
    })
}
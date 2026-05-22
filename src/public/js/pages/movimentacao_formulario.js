const criar = document.querySelector('#criar')

if(criar){
    criar.addEventListener('submit',(event)=>{

        event.preventDefault()

        const valor = document.querySelector('#valor').value
        const tipo = document.querySelector('#tipo').value
        const descricao = document.querySelector('#descricao').value

        fetch('/Nova',{
            method:'POST', 
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                valor,
                tipo,
                descricao
            })
        }).then((res)=>{
            if(res.ok){
                window.location.href = '/'
            }
        }).catch((err)=>{
            console.log(err)
        })

    })
}

const adicionar = document.querySelector('#adicionar')

if(adicionar){
    adicionar.addEventListener('click',()=>{
        window.location.href = '/nova'
    })
}



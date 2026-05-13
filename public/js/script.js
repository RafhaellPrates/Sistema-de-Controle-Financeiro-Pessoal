
const adicionar = document.querySelector('#adicionarMovimentacao')

if(adicionar){
    adicionar.addEventListener('click',()=>{
        window.location.href = '/novaMovimentacao'
    })
}

const criar = document.querySelector('#criarMovimentacao')

if(criar){
    criar.addEventListener('submit',(event)=>{

        event.preventDefault()

        const valor = document.querySelector('#valor').value
        const tipo = document.querySelector('#tipo').value
        const descricao = document.querySelector('#descricao').value

        fetch('/criarNovaMovimentacao',{
            method:'POST', 
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                valor,
                tipo,
                descricao
            })
        }).then(
            console.log('Transação criada com sucesso!!')
        ).catch((err)=>{
            console.log(err)
        })

    })
}

const deletar = document.querySelectorAll('.deletar')

deletar.forEach((botao)=>{

    const id = botao.dataset.id

    botao.addEventListener('click',()=>{
        fetch(`/deletar/${id}`,{method:'POST'}).then((res)=>{
        if(res.ok){
            window.location.reload()
        }
    })})
})

const atualizar = document.querySelectorAll('.atualizar')

atualizar.forEach((botao)=>{

    const id = botao.dataset.id

    botao.addEventListener('click',()=>{
        window.location.href = `/atualizar/${id}`
    })
})


const dadosAtualizados = document.querySelector('#dados_atualizados')

if(dadosAtualizados){

    dadosAtualizados.addEventListener('submit',(event)=>{

        event.preventDefault()

        const valor = document.querySelector('#valor').value
        const tipo = document.querySelector('#tipo').value
        const descricao = document.querySelector('#descricao').value
        const id = document.querySelector('#id').value

        fetch(`/Atualizar/${id}`,{
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
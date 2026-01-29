let historico = []
let movi = {}



window.onload = ()=>{
   atualizaDash('entrada',entrada,'green')
   atualizaDash('saida',saida,'red')
   atualizaDash('saldo',saldo)
   atualizaHist()
}
function limpa(c){
    c.innerHTML=''
}
function movimentacao(){
    const res = document.getElementById('res')
    limpa(res)


    let paragrafo = document.createElement('p')
    paragrafo.innerText = 'Qual valor? '
    res.appendChild(paragrafo)


    //recebe o valor da movimentação
    let valor = document.createElement('input')
    valor.type = 'number'
    res.appendChild(valor)


    //select para a escolha de entrada e saida
    let select = document.createElement('select')
    select.id = 'tipo'

    //option escolha "placeholder"
    let opcaoEscolha = document.createElement('option')
    opcaoEscolha.value = ''
    opcaoEscolha.innerText = 'Escolha..'
    opcaoEscolha.selected = true

    select.appendChild(opcaoEscolha)


    //array guardando as opçoes
    const opcao = [{ valor:'entrada',text:'Entrada'},{ valor:'saida',text:'Saida'}]

    //for para inserir e mostrar as opções no select    
    for(const op of opcao){

        let option = document.createElement('option')

        option.value = op.valor
        option.text = op.text
    
        select.appendChild(option)

    }

    //evento para mostra qual opção o usuario selecionou
    select.addEventListener('change', ()=>{
        if(select.value !== ''){
            opcaoEscolha.disabled = true
        }
    })
    res.appendChild(select)

    //botao para adicionar a movimentação
    let botao = document.createElement('input')
    botao.type = 'button' 
    botao.value = 'Adicionar'
    res.appendChild(botao)

    

    //chama a função que fara o calculo e adicionara os dados
    botao.onclick = ()=>{soma(Number(valor.value),select.value)}

}

function atualizaHist(tip,valo){
    movi = {
        tip:tip,
        valo:valo
    }
}

function atualizaDash(id,valor = 0,cor ='black'){
    const local = document.getElementById(id)
    limpa(local)

    const item = document.createElement('p')
        
    item.innerHTML = valor.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL'
    })

    item.style.color = cor
    local.appendChild(item)
}
let saida = 0
let entrada = 0
let saldo = 0

function soma(valor,tipo){
    
    let resposta = document.getElementById('res')
    let p = document.createElement('p')


    // Verifica se o valor digitado não está vazio, e também verifica se o tipo foi selecionado
    if( isNaN(valor)|| valor <= 0){
        p.innerText ='[ERROR] Digite um valor!! valido'
        p.style.color = 'red'
    } else{
        
            // Verifica o tipo e segrega o valor 
        if(tipo == 'entrada'){
            entrada += valor
            saldo += valor 
            p.innerText =`Movimentação de ${valor.toLocaleString('pt-BR', {style:'currency',currency:'BRl'})}`
            p.style.color='#05263f'
            atualizaDash('entrada',entrada,'green')


        }else if(tipo == 'saida'){  
            saldo -= valor
            saida += valor
            p.innerText =`Movimentação de ${valor.toLocaleString('pt-BR', {style:'currency',currency:'BRl'})}`
            p.style.color='#05263f'}
            atualizaDash('saida',saida,'red')
    }
    if(tipo != 'saida' && tipo != 'entrada'){
        p.innerText ='[ERROR] Escolha o tipo de movimentação'
        p.style.color = 'red'
    }
    let corSaldo = 'black'
    resposta.appendChild(p)
    atualizaDash('saldo',saldo,corSaldo)
    
    

    if(saldo > 0 ){
        corSaldo = 'green'
    }else{
        corSaldo = 'red'
    }

    movi['valo'] = valor
    movi['tip'] = tipo
    historico.push(movi)
    console.log(historico)

    
}


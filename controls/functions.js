

// // Limpa o conteúdo HTML de um elemento
// export const limpa = (c)=>{
//     c.innerHTML=''
// }
// // FUNÇÃO PARA CRIAR A MOVIMENTAÇÃO

// export const movimentacao = ()=>{
//     const res = document.getElementById('res')

//     // Limpa a área de resposta
//     limpa(res)

//     // Cria o texto "Qual valor?"
//     let paragrafo = document.createElement('p')
//     paragrafo.innerText = 'Qual valor? '
//     res.appendChild(paragrafo)

//     // Input para receber o valor da movimentação
//     let valor = document.createElement('input')
//     valor.type = 'number'
//     res.appendChild(valor)

//     // Cria o select para escolher entrada ou saída
//     let select = document.createElement('select')
//     select.id = 'tipo'

//     // Option inicial (placeholder)
//     let opcaoEscolha = document.createElement('option')
//     opcaoEscolha.value = ''
//     opcaoEscolha.innerText = 'Escolha..'
//     opcaoEscolha.selected = true

//     select.appendChild(opcaoEscolha)

//     // Array com as opções do select
//     const opcao = [
//         { valor:'entrada', text:'Entrada' },
//         { valor:'saida', text:'Saida' }
//     ]

//     // Loop para criar e adicionar as opções no select
//     for(const op of opcao){
//         let option = document.createElement('option')
//         option.value = op.valor
//         option.text = op.text
//         select.appendChild(option)
//     }

//     // Evento que desativa o placeholder após a escolha
//     select.addEventListener('change', ()=>{
//         if(select.value !== ''){
//             opcaoEscolha.disabled = true
//         }
//     })

//     res.appendChild(select)

//     // Botão para adicionar a movimentação
//     let botao = document.createElement('input')
//     botao.type = 'button' 
//     botao.value = 'Adicionar'
//     res.appendChild(botao)

//     // Ao clicar, valida os dados e executa o cálculo
//     botao.onclick = ()=>{valida(Number(valor.value),select.value)}
// }

// // VALIDAÇÃO DOS DADOS

// export const  valida = (valor,tipo)=>{
    
//     let p = document.querySelector('#mensa')
//     if(!p) return

//     // Verifica se o valor é inválido ou menor/igual a zero
//     if(isNaN(valor) || valor <= 0){
//         p.innerText ='[ERROR] Digite um valor!! valido'
//         p.style.color = 'red'
//     } 
//     // Verifica se o tipo não foi selecionado
//     else if(tipo != 'saida' && tipo != 'entrada'){
//         p.innerText ='[ERROR] Escolha o tipo de movimentação'
//         p.style.color = 'red'
//     } 
//     // Se tudo estiver certo, executa a soma
//     else {
//         soma(valor,tipo)
//     }
// }
// // FUNÇÃO DE CÁLCULO

// export const soma = (valor,tipo)=>{
//     const data = new Date()

//     // Se for entrada
//     if(tipo == 'entrada'){
//         entrada += valor
//         saldo += valor 
//     } 
//     // Se for saída
//     else if(tipo == 'saida'){  
//         saldo -= valor
//         saida += valor
//     }

//     // Cria o objeto da movimentação
//     Objetomovi(valor,tipo,data)

//     // Atualiza mensagens e dashboard
//     atualizaValores(valor,tipo,data)

//     // Ajusta a cor do saldo
//     corDoSaldo()
// }
// // FORMATA DATA

// export const formataData = (data)=>{
//     return data.toLocaleDateString('pt-BR',{
//         day: '2-digit',
//         month: '2-digit',
//         year: '2-digit'
//     })
// }
// // ATUALIZA MENSAGEM DE FEEDBACK

// export const atualizaValores = (valor,tipo,data)=>{
//     let p = document.querySelector('#mensa')
//     if(!p) return

//     if(tipo == 'entrada'){
//         p.innerText =`${formataData(data)} Movimentação de ${valor.toLocaleString(
//             'pt-BR',
//             {style:'currency',currency:'BRL'}
//         )} adicionada com sucesso!! `
//         p.style.color='#05263f'
//         atualizaDash('entrada',entrada,'green')
        
//     } else if(tipo == 'saida'){  
//         p.innerText =`${formataData(data)} Movimentação de ${valor.toLocaleString(
//             'pt-BR',
//             {style:'currency',currency:'BRL'}
//         )} adicionada com sucesso!!`
//         p.style.color='#05263f'
//         atualizaDash('saida',saida,'red')     
//     }
// }
// // CRIA O OBJETO DE MOVIMENTAÇÃO

// export const Objetomovi = (valor,tipo,data)=>{
//     let movi = {}
    
//     movi['valor'] = valor
//     movi['tipo'] = tipo
//     movi['data'] = data.toISOString()

//     // Adiciona no histórico
//     historico.push(movi)  

//     //Atualiza o historico
//     atualizaHist()

//     // Cria o estado completo da aplicação
//     const estado = {historico, entrada, saida, saldo}

//     // Salva no localStorage
//     salvarEstado(estado)
// }
// // DEFINE A COR DO SALDO

// export const corDoSaldo = ()=>{
//     let corSaldo = '#05263f'

//     if(saldo == 0){
//         corSaldo = 'black'
//     } 
//     else if (saldo < 0){
//         corSaldo = 'red'
//     }

//     atualizaDash('saldo',saldo,corSaldo)
// }

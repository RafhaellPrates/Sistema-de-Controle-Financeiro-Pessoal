// VARIÁVEIS GLOBAIS

// Array que guarda todo o histórico de movimentações
let historico = []

// Variaveis para calculos
let {saida,entrada,saldo} = 0


// AO CARREGAR A PÁGINA
window.onload = ()=>{
    // Carrega os dados salvos no localStorage
    carregarEstado()

    // Atualiza os valores do dashboard
    atualizaDash('entrada',entrada,'green')
    atualizaDash('saida',saida,'red')
    atualizaDash('saldo',saldo)
    
    // Atualiza o historico
    atualizaHist()
    // Ajusta a cor do saldo (positivo, negativo ou zero)
    corDoSaldo()
}




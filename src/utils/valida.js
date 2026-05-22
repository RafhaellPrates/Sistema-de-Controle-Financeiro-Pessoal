export const valida = (valor,descricao,tipo)=>{
    let erros = []

    if(!valor){
        erros.push('Erro!!, digite um valor valido.')
    }
    if(!descricao){
        erros.push('Erro!!, adicione uma descrição valida.')
    }
    if(!tipo){
        erros.push('Erro!!, escolha um tipo valido.')
    }
    
       return {valor,descricao,tipo,erros}

} 
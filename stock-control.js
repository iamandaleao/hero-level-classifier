let operacao = parseInt(gets())
let quantidade = parseInt(gets())

let estoque = 5

// TODO: Implemente a condição necessária para verificar a operação. Se for 1, adiciona a quantidade ao estoque:
if (operacao === 1) {
  estoque += quantidade
  print(estoque)
}
// TODO: Se a operação for 2, tenta retirar a quantidade do estoque:
else if (operacao === 2) {
  if (quantidade > estoque) {
    // TODO: Caso não tenha estoque suficiente, exibe a mensagem indicada:
    print("Estoque insuficiente")
  } else {
    estoque -= quantidade
    print(estoque)
  }
}

// O número de produtos a ser adicionado
let numeroDeProdutos = parseInt(gets())

// TODO: Crie um array para armazenar os produtos:
let carrinho = []

// TODO: Leia os produtos e os adicione ao carrinho:
for (let i = 0; i < numeroDeProdutos; i++) {
  let produto = gets()
  carrinho.push(produto)
}

// TODO: Exiba o carrinho final no formato esperado;
print("Carrinho final: " + carrinho.join(", "))

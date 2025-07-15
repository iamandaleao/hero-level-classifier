// Função que calcula o saldo e retorna o nível do jogador
function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas
  let nivel = ""

  if (vitorias < 10) {
    nivel = "Ferro"
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze"
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata"
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro"
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante"
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário"
  } else if (vitorias >= 101) {
    nivel = "Imortal"
  } else {
    nivel = "Nível desconhecido"
  }

  return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`
}

// Exemplo de uso
const resultado = calcularNivel(85, 30)
console.log(resultado)

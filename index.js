// Cabeçalho - entrada dos dados do herói
let heroName = "Amanda"
let heroXP = 9200
let heroLevel = ""

// Corpo - estrutura de decisão para classificar o nível
if (heroXP < 1000) {
  heroLevel = "Ferro"
} else if (heroXP <= 2000) {
  heroLevel = "Bronze"
} else if (heroXP <= 5000) {
  heroLevel = "Prata"
} else if (heroXP <= 7000) {
  heroLevel = "Ouro"
} else if (heroXP <= 8000) {
  heroLevel = "Platina"
} else if (heroXP <= 9000) {
  heroLevel = "Ascendente"
} else if (heroXP <= 10000) {
  heroLevel = "Imortal"
} else {
  heroLevel = "Radiante"
}

// Rodapé - saída final
console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`)

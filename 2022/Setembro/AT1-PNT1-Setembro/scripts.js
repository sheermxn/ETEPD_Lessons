// Coleta de dados do Usuario 1
var nome1 = prompt(`Insira o nome da pessoa (1):`)
var sobrenome1 = prompt(`Insira o sobrenome da pessoa (1):`)
var idade1 = parseInt(prompt(`Insira a idade da pessoa (1)`))
// Coleta de dados do Usuario 2
var nome2 = prompt(`Insira o nome da pessoa (2):`)
var sobrenome2 = prompt(`Insira o sobrenome da pessoa (2):`)
var idade2 = parseInt(prompt(`Insira a idade da pessoa (2)`))
// Coleta de dados do Usuario 3
var nome3 = prompt(`Insira o nome da pessoa (3):`)
var sobrenome3 = prompt(`Insira o sobrenome da pessoa (3):`)
var idade3 = parseInt(prompt(`Insira a idade da pessoa (3)`))
//
// Calculo da Media das Idades
//
// Abaixo temos uma triagem para checar se todos os dados inseridos no campo de (idade) são númericos.
if (!isNaN(idade1) && !isNaN(idade2) && !isNaN(idade3)) {
    // Variavel de Calculo (media)
    var media = ((idade1 + idade2 + idade3) / 3).toFixed(2)
    alert(`Calculando...`)
    // Inserção dos dados no HTML nas linhas abaixo:
    document.write(`Nome: ${nome1} ${sobrenome1} - Idade: ${String(idade1)}<br>`)
    document.write(`Nome: ${nome2} ${sobrenome2} - Idade: ${String(idade2)}<br>`)
    document.write(`Nome: ${nome3} ${sobrenome3} - Idade: ${String(idade3)}<br>`)
    document.write(`Média das idades: ${String(media)}`)
} else {
    alert(`Você inseriu um dado não considerado um número nos campos de idade.`)
}

// Comentarios adicionais:
// String() - Função usada para transformar o dado em string.
// ${} - Formatação para uso de variáveis ou código JS dentro de uma string. (deve ser englobado dentro de `` e não de '').
// isNaN() - Função usada para checar se um dado é númerico ou não. Caso não seja ele te retorna (true), caso seja ele te retorna (false). Colocamos um (!) antes do método para inverter os sentidos.
// .toFixed(2) - Método usado para limitar as casas decimais de um float a (2).
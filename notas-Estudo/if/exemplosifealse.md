## Exemplos de if ealse 
```js 
9. Peça três notas de um aluno, calcule a média e informe:

"Aprovado" se a média for maior ou igual a 7
"Recuperação" se for maior ou igual a 5 e menor que 7
"Reprovado" se for menor que 5

 const nota1 = Number(prompt("Digite a primeira nota"))
    const nota2 = Number(prompt("Digite a segunda nota"))
    const nota3 = Number(prompt("Digite a terceira nota"))
    const media = (nota1 + nota2 + nota3) / 3

    if (media <= 5) {
        alert("Parabéns você esta de recuperação")

    }
    else if (media <= 7) {
        alert("Parabéns você ficou de recuperção")
    }
    else {
        alert("parabéns você passou")
    }
    ```
```js 
10. Peça o sexo da pessoa (H para homem, M para mulher) e a altura. Use as fórmulas para calcular o peso ideal:

Homens: (72.7 × altura) - 58
Mulheres: (62.1 × altura) - 44.7

 const sexo = prompt("Digite seu sexo")
    const altura = Number(prompt("Digite sua altura"))
    
    if (sexo === "H" || sexo === "h"|| sexo ==="Homem"|| sexo ==="homem" || sexo ==="masculino"|| sexo ==="Masculino") {
        const H = (72.2 * altura) - 58
        alert("O peso ideal para sexo masculino com sua altura é: " + H)

    } else if (sexo === "F"|| sexo ==="f"|| sexo ==="Femenino"|| sexo ==="femenino"|| sexo ==="Mulher"|| sexo ==="mulher") {
        const M = (62.1 * altura) - 44.7
        alert("O seu peso ideal para o sexo feminino comparando com sua altura é de:" + M)
    }
else{
    alert("você não digitou seu sexo")
}
```
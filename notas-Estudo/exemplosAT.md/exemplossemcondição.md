## atividades simples

```js
1. Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
 const numero = Number(prompt("Digite um número:"))
    const outronumero = Number(prompt("Digite outro número:"))
    alert(numero + outronumero)
    ```

```js
2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
const numero2 = Number(prompt("Qual é o valor que você ganha por hora trabalhada ? :):"))
   
    const outronumero2 = Number(prompt("Qual sua carga horaria trabalhada por mes? "))
    const resultado2 = (numero2 * outronumero2)
    alert("O valor mensal que você ganha é " + resultado2 + "R$")
```
```js
3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.

const peso1 = Number(prompt("qual peso da primeira pessoa ? :):"))
    const peso2 = Number(prompt("Qual peso da segunda pessoa? :):"))
    const peso3 = Number(prompt("Qual peso da terceira pessoa ? :):"))
    const peso4 = Number(prompt("Qual peso da quarta pessoa ? :):"))
    const peso5 = Number(prompt("Qual peso da quinta pessoa? :):"))

    const resultado = ((peso1 + peso2 + peso3 + peso4 + peso5) / 5)

    alert("O resultado final da média dos pesos é " + resultado)
```
```js
4. Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5

 const Graus = Number(prompt('Digite uma temperatura em graus Celsius'))

    const resultado3 = ((9 * Graus + 160) / 5)

    alert("Fahrenheit " + resultado3)
    ```
```js
5. Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)

const Numero = Number(prompt('Qual valor de em milhas que você deseja converter em km.'))
    const resultado5 = (Numero * 1.609344)
    alert('O seu resultado  é ' + resultado5 + 'Km')
```
```js
6.Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
 
 const Numero = Number(prompt('Qual valor de segundos que você quer conventer em horas.'))
    const resultado6 = (Numero / 3600)
    alert('O seu resultado  é ' + resultado6 + 'h')
    ```
    ```js
    7. Peça uma distância em quilômetros e converta para metros e centímetros.
   
   const Numero = Number(prompt('Qual é o valor em Km que você quer converter para metros e centímetros'))
    const resultado7 = (Numero * 1000)
    const resultadox = (Numero * 100000)
    alert('O seu resultado em metros são ' + resultado7 + 'metros')
    alert('O seu resultado em centímetros é ' + resultadox + 'centimeros')
    ```
    ```
8. Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).


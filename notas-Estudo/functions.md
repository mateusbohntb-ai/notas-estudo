## função 
```
A função é ultilizada para ativar o comando quando for chamado podem ser conectados com botões ou outro tipos de comandos .
Comando:

function  nomedobotão() {
    codigo
}
```

## Botões 
```js
Ultilisados para aplicar uma ação ou ativar uma fução.
comando:
<button id="exemplo1">Exercicio 1</button>
usar o elementbyid é mais aconselhavel para um codigo mais pratico e facil.
```
## ElementByID
```js
Ultilizado para lincar os botões com as funções/java script com muitas outras finalidades tambem.
comando:
const buttonExemplo1 = document.getElementById("exemplo1")
buttonExemplo1.addEventListener("click", () => { exemplo1() })
para a funcionalidade do botão e necessario colocar o eventListener para a magica acontecer e executar o codigo quando chamado.
```

function exemplo1(){
     const numero = Number(prompt("Digite um numero:"))
    const numero2 = Number(prompt("Digite um outro numero:"))
    alert(numero + numero2 + " Resultado final")
}




const buttonExemplo1 = document.getElementById("exemplo1")
buttonExemplo1.addEventListener("click", () => { exemplo1() })
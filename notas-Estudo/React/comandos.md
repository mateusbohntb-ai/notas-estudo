## Criação react 

```js 
npm create vite@latest .
```

## Router 
```js
npm i react-router-dom 



indrodução 
depois da instalação do router sera preciso entrar no main.jsx e auterar para ficar assim 
 <StrictMode>
    <BrowserRouter>
    <App />
     </BrowserRouter>
  </StrictMode>,



sempre é importante importar 
no app.jsx
import {Route,Routes} from "react-router-dom"


para colorcar as rotas voce fara assim no app.jsx 
   <Routes>
    
       <Route path="/Home" element={<Home />} />
       <Route path="/singnup" element={<SingnUp />} />
         <Route path="/Exercicio1" element={<Exercicio1 />} />
             <Route path="/Exercicio2" element={<Exercicio2 />} />
                 <Route path="/Exercicio3" element={<Exercicio3 />} />
                  <Route path="/Exercicio4" element={<Exercicio4 />} />
      </Routes>

```
``` js 
para criação de componentes sera necessario de header e um footer 
sempre criar as pasta na pasta src e tambem lembrar sempre de exportar 

exemplo > pasta Header sempre criar com a letra da frente maiuscula.

import './style.css' sempr importar o css 

import { Link } from 'react-router-dom' importar o reacxt router dom caso for usar os Links das rotas 
function Header(){
return (
  <header>
   
  <h2>Atividades React </h2>
  <Link to="/Home">Lista de exercicios</Link>
   <Link to="/SingnUp">Cadastrar-se</Link>
  </header>
)
}

export default Header 
sempre tera uma forma de exportar seu arquivo que sera o export para sair

para o Header aparecer precisara estar no App.jsx 
no app jsx precisara estar importando os conteudos que voce criou  

import {Route,Routes} from "react-router-dom"
import './App.css'
import Header from "./Component/Header"

function App() {
  return (
    <>
      <Header />
      <Routes>
    
       <Route path="/Home" element={<Home />} /> aqui são as paginas que estão na pasta page
       <Route path="/singnup" element={<SingnUp />} />
         <Route path="/Exercicio1" element={<Exercicio1 />} />
             <Route path="/Exercicio2" element={<Exercicio2 />} />
                 <Route path="/Exercicio3" element={<Exercicio3 />} />
                  <Route path="/Exercicio4" element={<Exercicio4 />} />
      </Routes>
        <Footer/>
    </>
  )
}

export default App

```js 
explo de pagina  home 

import './style.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <Link to="/Exercicio1"> <button>Exercicio 1</button></Link>
            <br />
            <Link to="/Exercicio2"> <button>Exercicio 2</button></Link>
            <br />
            <Link to="/Exercicio3"> <button>Exercicio 3</button></Link>
            <br />
            <Link to="/Exercicio4"> <button>Exercicio 4</button></Link>
        </>
    )
}

export default Home 

```
```js
Exemplo de exercicio 

import './style.css'
import { Link } from 'react-router-dom'
import { useState } from "react" para fazer funcionar precisa importar use state 
function Exercicio1() {

  const [numero1, setNumero1] = useState("")
  const [numero2, setNumero2] = useState("")
  const [resultado, setResultado] = useState()

  function conta(event) {

    event.preventDefault();
    setResultado(Number(numero1) + Number(numero2));
  }

  return (



    <>
    <form onSubmit={conta} >
      <label htmlFor="text">Digite um numero!</label>
      <input
        type="number"
        value={numero1}
        onChange={(event) => setNumero1(event.target.value)}

      />
      <label htmlFor="text">Por favor Digite outro numero!</label>
      <input
        type="number"
        value={numero2}
        onChange={(event) => setNumero2(event.target.value)}
      />
      <label htmlFor="text">Vou fazer soma dos numeros !</label>
      <br />
      <button type="submit" onClick={conta}>Resultado</button>
      </form>
      <p>{resultado}</p>
    </>
  )
}

export default Exercicio1

```
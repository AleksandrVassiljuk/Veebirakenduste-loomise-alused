import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 // näitab kõiki dom-i elemente, mis on lehel olemas. See on nagu
 // veebilehe struktuuri kaart, mis näitab kõiki elemente ja 
 // nende suhteid üksteisega. See võib olla kasulik, kui 
 // soovite mõista, kuidas leht on üles ehitatud ja kuidas
 // erinevad elemendid omavahel seotud on.
 
// dir näitab kõiki DOM-i elemente, mis on lehel olemas, kuid see
// kuvab need hierarhiliselt, näidates iga elemendi lapsi ja vanemaid.
// See on kasulik, kui soovite näha, kuidas elemendid on omavahel seotud
// ja kuidas nad on paigutatud lehel. See võib aidata teil mõista,
// kuidas leht on üles ehitatud ja kuidas erinevad elemendid omavahel seotud on.

// Nüüd proovime muuta dokumendi title-i, mis on DOM-i element.
// See on nagu veebilehe pealkiri, mis kuvatakse brauseri vahekaardil.
// document.title = "DOM-i pealkiri on muudetud";

//nüüd proovime muuta documendi body taustavärvi, mis on dom-i element 

// PARANDUS: Panin sinu rea useEffecti sisse, et see ei oleks punane ja leiaks elemendi üles

const username: string = "see ei ole DOM";

useEffect(() => {
  const domTitle = document.getElementById("dom-title");
  if (domTitle) {
    domTitle.textContent += username === "" ? " Tere külaline!" : username;
  }
}, []);


  return (
    <>
      <h1 id="dom-title">
        {username === "" ? "mis on Dom " : username}
      </h1> 
      
      <h1> 
          Mis on Dom?
      </h1>
    <p>
        Dom on document object model.
        On võimalik teha staatiline leht dünaaamiliseks. JS/TS on 
        võimalik manipuleerida DOM-i, millega saab muuta sisu, struktuuri 
        ja vaadet 
    
    <br />
    <br />
    Kui vaadata index.html, siis näete erinevaid elemente, mis suhtlevad DOM-iga.
    Näiteks div id="root"  /div on koht, kuhu React rakendus renderdatakse. 
    Kui React rakendus käivitub, siis see loob DOM-i elemendid ja renderdab need 
    #root div-i sisse, võimaldades teil näha ja suhelda nende elementidega veebilehel.
    <br />
    <br />
     Nt HTML-is on head ja title. Body sees on h1, p, a jne.
     Need on kõik DOM-i elemendid, mida saab JavaScripti abil manipuleerida.
     </p>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

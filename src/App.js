import avatar from './assets/avatar.jpg';
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkedAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
            <div className="nome">
              <h2>Pedro Colletti</h2>
              <img src={avatar} className="foto-perfil"/>
            </div>
            <div className="info">
              <h2 className="info-pessoais">Informações Pessoais</h2>
                <ul>
                  <label> <FontAwesomeIcon icon={ faMobileAlt }/>  (16) 99776-5777 </label><br></br>
                  <label> <FontAwesomeIcon icon={ faMailBulk }/> pedrocolletti@icloud.com </label><br></br>
                  <label> <FontAwesomeIcon icon={ faMapMarkedAlt }/> Av. Estrada de ferro, 148 - Araraquara-SP </label>
                </ul>
            </div>
        <div className="conteudo">
            <div className="escolaridade">
              <h2>Escolaridade</h2>
                <label><b>Anhanguera</b> Análise e Desenvolvimento de Sistemas </label><br></br>
                <label><b>Unipampa</b> Relações Internacionais</label>
            </div>
            <div className="exp-profissional">
              <h2>Experiência Profissional</h2>
                <ul>
                  <li><b>BeOnUp: </b>Estagiário Dev fzendo atribuições básicas para aprender tudo sobre desenvolvimento ou pelo menos grande parte das coisas, com o nosso querido Edi. Agora estou escrevendo isso pra encher linguiça pra ver o comportamento da página quanto a quebra de linhas.</li><br></br>
                  <li><b>Saffi Consultoria: </b> Lá eu fazia um trabalho de vendas e não gostava. Tinha que ficar ligando e marcando reunião com empresarios, levava "tirada" toda hora e era bem estressante. </li>
                </ul>
            </div>
            <div className="certificados">
              <h2>Certificados</h2>
                <ol>
                  <li><b>HTML e CSS</b> -  Alura</li><br></br>
                  <li><b>Básico em Lógica e programação</b> - DIO</li>
                </ol>
            </div>
        </div>
            <div className="paginas-sociais">
              <h6><b>Páginas Sociais</b></h6>
                  <a href="https://www.linkedin.com/in/pedrocolletti/" title="Linkedln">   <FontAwesomeIcon icon={ faLinkedin }/></a><br></br>
                  <a href="https://github.com/PedroColletti" title="Github">  <FontAwesomeIcon icon={ faGithubSquare }/> <span class="menu-title sr-only">Github</span></a>
            </div>
    </div>
  );
}
export default App;
import React, {Suspense} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Concluido from './pages/Concluido';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Editais from './pages/Editais';
import Discentes from './pages/Discentes';
import Docentes from './pages/Docentes';
import Erro404 from './pages/Erro404';
import Login from './pages/Login';
import Noticias from './pages/Noticias';
import Parceiros from './pages/Parceiros';
import Pesquisadores from './pages/Pesquisadores';
import Portifolio from './pages/Portifolio';
import Projeto from './pages/Projeto';
import Publicacoes from './pages/Publicacoes';
import Sobre from './pages/Sobre';
import Criarconta from './pages/Criarconta';
import './App.css';



function App() { 
  return (
    <BrowserRouter>
      <Suspense fallback = {<div> <h1>Ola</h1>{/*Aqui vai o efeito de Carregando */} </div>}> 
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path='/concluido' component={Concluido}/>
        <Route path='/contato' component={Contato}/>
        <Route path='/discentes' component={Discentes}/>
        <Route path='/docentes' component={Docentes}/>
        <Route path='/editais' component={Editais}/>
        <Route path='/login' component={Login}/>
        <Route path='/noticias' component={Noticias}/>
        <Route path='/parceiros' component={Parceiros}/>
        <Route path='/pesquisadores' component={Pesquisadores}/>
        <Route path='/portifolio' component={Portifolio}/>
        <Route path='/projeto' component={Projeto}/>
        <Route path='/publicacoes' component={Publicacoes}/>
        <Route path='/sobre' component={Sobre}/>
        <Route path='/criarconta' component={Criarconta}/>
        <Route path='*' component={Erro404} />
      </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

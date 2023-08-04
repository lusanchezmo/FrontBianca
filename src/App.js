import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Aptos from './components/Aptos';
import NotFound from './components/NotFound';
import RedApto from './components/RedApto';
import Redistribution from './components/Redistribution';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter basename='/FrontBianca'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/FrontBianca/:ingruma' element={<Aptos/>} />
        <Route path='/FrontBianca/:ingruma/redapto' element={<RedApto/>} />
        <Route path='/FrontBianca/redistribution/:ingruma' element={<Redistribution/>} />
        <Route path='/FrontBianca/:ingruma/productos' element={<Products/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

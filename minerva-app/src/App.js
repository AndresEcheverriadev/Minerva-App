import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer';
import BolsaCompras from './Components/Bolsa/BolsaCompras';
import NosotrosPage from './Components/Nosotros/NosotrosPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Item List Container'} />} />
          <Route path='/categoria/:categoriaid' element={<ItemListContainer greeting={'Item List Container'} />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer greeting={'Item Detail Container'} />} /> 
          <Route path='/bolsa' element={<BolsaCompras greeting={'Pronto..Bolsa de compra'} />} /> 
          <Route path='/nosotros' element={<NosotrosPage greeting={'Pronto..Nosotros'} />} /> 
          <Route path='/*' element={<Navigate to='/'/>} /> 
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


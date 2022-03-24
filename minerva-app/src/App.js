import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer'
import ItemListDetailContainer from './Containers/ItemListDetailContainer';
import BolsaCompras from './Components/Bolsa/BolsaCompras';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Item List Container'} />} />
          <Route path='/detalle/:detalleId' element={<ItemListDetailContainer greeting={'Item List Detail Container'} />} /> 
          <Route path='/bolsa' element={<BolsaCompras greeting={'Pronto..Bolsa de compra'} />} /> 
          <Route path='/*' element={<Navigate to='/'/>} /> 
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


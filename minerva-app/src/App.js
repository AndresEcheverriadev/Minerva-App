import {lazy,Suspense,} from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BagContextProvider from './Context/BagContext';
import {Spinner} from 'react-bootstrap';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import BolsaCompras from './Components/Bolsa/BolsaCompras';
import NosotrosPage from './Components/Nosotros/NosotrosPage';
import Footer from './Components/Footer/Footer';
import './App.css';

const ItemListContainer = lazy(() => import('./Containers/ItemListContainer'))

function App() {
  return (
    <Suspense fallback={<Spinner animation="border" role="status" variant="warning"><span className="visually-hidden">Loading...</span></Spinner>}> 
      <BrowserRouter>
        <BagContextProvider>
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
            <Footer />
          </div>
        </BagContextProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
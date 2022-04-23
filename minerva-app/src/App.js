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
import HomePage from './Components/Home/HomePage';
import CheckoutCompras from './Components/Bolsa/CheckoutCompras';
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
                <Route path='/' element={<HomePage/>} />
                <Route path='/categoria/:categoriaid' element={<ItemListContainer/>} />
                <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} /> 
                <Route path='/bolsa' element={<BolsaCompras/>} /> 
                <Route path='/checkout' element={<CheckoutCompras/>} />
                <Route path='/porqueMinerva' element={<NosotrosPage/>} /> 
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
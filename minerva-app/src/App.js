import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">  
      <NavBar />
      <Switch>
        <ItemDetailContainer /> 
      </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';


function App() {
  return (
    <div className="App">  
      <NavBar /> 
      <ItemListContainer greeting='Hello from Minerva' /> 
    </div>
    
  );
}

export default App;


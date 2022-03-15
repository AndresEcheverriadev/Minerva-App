import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

const promise = new Promise((resolve, reject) => {
  let boolean = true;

//   if(boolean) {
//     resolve({
//       setTimeout(alertFunc,5000);
//     function alertFunc() {
//       alert('timeok');
//     }
//     })
//    else {
//     reject('Promise error')
//   };

// }); 

// if(boolean) {

}

promise
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(console.log('Final'));


function App() {
  return (
    <div className="App">  
      <NavBar /> 
      <ItemListContainer greeting='Hello from Minerva' /> 
    </div>
    
  );
}

export default App;


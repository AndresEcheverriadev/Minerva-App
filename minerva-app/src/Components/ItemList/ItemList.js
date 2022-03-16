const promise = new Promise((resolve, reject) => {
  let boolean = true;

  if(boolean) {

    setTimeout(() => {
      alert('time out')
    }, 5000);

    resolve('promise resolved');

  } else {

    reject('promise rejected');
  }

});


promise
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(console.log('Final'));




const ItemList = [  
{id:'1',category:'Anillos',itemName:'Anillo Zafiro Bodicea',itemImageURL:'../../Assets/ImgsProductos1.png',itemPrice: 49.990}
];

JSON.parse(ItemList);

export default ItemList
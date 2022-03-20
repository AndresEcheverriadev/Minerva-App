const Items = [  
    {Id:1,Category:'Anillos',Name:'Anillo Rubí Bodicea',ImageURL:'/Assets/ImgsProductos1.png',Price:40990,Description:'La dureza del rubí representa la determinación de quien lo lleva.'},
    {Id:2,Category:'Collares',Name:'Collar Arcoíris Ceres',ImageURL:'/Assets/ImgsProductos2.png',Price: 60990,Description:'La buena suerte del arcoíris para quien se construye la propia.'},
    {Id:3,Category:'Aros',Name:'Aros Cobre Afrodita',ImageURL:'/Assets/ImgsProductos3.png',Price: 39990,Description:'Afrodita nació adulta, núbil e infinitamente deseable, como tú ahora mismo.'},
    {Id:4,Category:'Anillos',Name:'Anillo Diamante Freya',ImageURL:'/Assets/ImgsProductos4.png',Price: 39990,Description:'La presión convierte al grafito en diamante y a ti en una diosa.'}
];




export const getProducts = new Promise((resolve, reject) => {

        let boolean = true;
        if(boolean) {
          setTimeout(() => { 
            resolve(Items);
          }, 2000);
        }
         
        else {
          reject('promise rejected');
    }
});


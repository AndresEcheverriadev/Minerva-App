const Items = [  
    {Id:'1',categoria:'Anillos',Name:'Anillo Rubí Bodicea',ImageURL:'/Assets/ImgsProductos1.png',Price:40990,stock:6,Description:'La dureza del rubí representa la determinación de quien lo lleva.'},
    {Id:'2',categoria:'Collares',Name:'Collar Arcoíris Ceres',ImageURL:'/Assets/ImgsProductos2.png',Price: 60990,stock:8,Description:'La buena suerte del arcoíris para quien se construye la propia.'},
    {Id:'3',categoria:'Aros',Name:'Aros Cobre Afrodita',ImageURL:'/Assets/ImgsProductos3.png',Price: 39990,stock:4,Description:'Afrodita nació adulta, núbil e infinitamente deseable, como tú ahora mismo.'},
    {Id:'4',categoria:'Anillos',Name:'Anillo Diamante Freya',ImageURL:'/Assets/ImgsProductos4.png',Price: 39990,stock:3,Description:'La presión convierte al grafito en diamante y a ti en una diosa.'},
    {Id:'5',categoria:'Pulseras',Name:'En costrucción',ImageURL:'/Assets/ImgsProductos0.png',Price: 39990,stock:3,Description:'Lorem Ipsum lorem ipsum.'},
    {Id:'6',categoria:'Tops',Name:'En costrucción',ImageURL:'/Assets/ImgsProductos0.png',Price: 39990,stock:3,Description:'Lorem Ipsum lorem ipsum.'},
    {Id:'7',categoria:'Bodys',Name:'En costrucción',ImageURL:'/Assets/ImgsProductos0.png',Price: 39990,stock:3,Description:'Lorem Ipsum lorem ipsum.'},
    {Id:'8',categoria:'Pañuelos',Name:'En costrucción',ImageURL:'/Assets/ImgsProductos0.png',Price: 39990,stock:3,Description:'Lorem Ipsum lorem ipsum.'},
    {Id:'9',categoria:'Cinturones',Name:'En costrucción',ImageURL:'/Assets/ImgsProductos0.png',Price: 39990,stock:3,Description:'Lorem Ipsum lorem ipsum.'},
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


let PRODUCTOS = [
            {
            "productoId": 1,
            "nombre": "Juan C. Castagnino, Lucha de Potros",
            "descripcion": "Serigrafía original sobre papel, medidas de 70 x 50 cm.",
            "img" : "multimedia/fotos/caballo_sepia.jpg",
            "soporte": "papel",
            "medidas": "70 x 50 cm",
            "price": 25000
            },
            {
            "productoId": 2,
            "nombre": "Juan C.  Castagnino, Potro",
            "img" : "multimedia/fotos/Castagnino_Potro.jpg",
            "descripcion": "Serigrafía original sobre papel, medidas de 70 x 50 cm.",
            "soporte": "papel",
            "medidas": "70 x 50 cm",
            "price": 22000
            },
            {
            "productoId": 3,
            "nombre": "Juan Manuel Sánchez, Paisaje",
            "img" : "multimedia/fotos/batlle_planas.jpg",
            "descripcion": "Serigrafía original sobre papel, medidas de 70 x 50 cm.",
            "soporte": "papel",
            "medidas": "70 x 50 cm",
            "price": 15000
            },
            {
            "productoId": 4,
            "nombre": "Juan Manuel Sánchez, Paisaje",
            "img" : "multimedia/fotos/lopez_armentia.jpg",
            "descripcion": "Serigrafía original sobre papel, medidas de 70 x 50 cm.",
            "soporte": "papel",
            "medidas": "70 x 50 cm",
            "price": 12000
            }
        ]
        /*,
        {
            "productoId": 5,
            "nombre": "FIREBASE",
            "imagen": "",
            "descripcion": "Firebase se ha convertido en la Plataforma Cloud más fácil de aprender e integrar en proyectos web y mobile. Preparamos este curso para que aprendas a moverte ágilmente en Firebase y que puedas sacar provecho de tus desarrollos, con este monumental backend lleno de opciones útiles.",
            "horas": "20 hs",
            "price": 26000
            }*/



let selectedProducts = []; //Arreglo done iran los productos
let btnPedir = document.getElementById("btnPedido"); //Boton que agrega el pedido
let inputCant = document.getElementById("cantPed"); // Input donde se ingresa la cantidad del pedido
function onSelectClick(event) { 
  const idProduct = event.target.dataset.id;
  selectedProduct = products.find(function(product) {
    if(product.id === idProduct) {
      return product;
    }
  });
  selectedProducts.push(selectedProduct);
  localStorage.setItem("codigo",idProduct);
  event.preventDefault();
}
// 17:37
// Y aqui sería donde lo llamo
// 17:38
const btnProducts = document.querySelectorAll('.btnAgr');
  btnProducts.forEach(function(btnProduct) {
    btnProduct.addEventListener('click', onSelectClick);
    
  })


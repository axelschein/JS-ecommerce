var carrito = []
var changuito = "" 
let productos = document.getElementById("productos")
let grillaDeProductos = document.getElementById("grillaDeProductos")
let shoppingcart = document.getElementById("shoppingcart")
let checkout = document.getElementById("checkout")
let totales = document.getElementById("totales")

function cargoProductos(grilla) { //aca cargo los productos
    let filas = "<tr><td>No hay cursos para mostrar. Por favor, intente de nuevo más tarde.</td></tr>"
        if (PRODUCTOS.length > 0) {
            filas = ""
            for (let i in PRODUCTOS) {
                filas +=               
                         `<div class="card">                                
                         <div class="white">
                             <img class="imgProduct" src="${PRODUCTOS[i].img}">
                             <h2 class="tamanio_titulos">${PRODUCTOS[i].nombre}</h2>
                             <p>$ ${PRODUCTOS[i].price} </p>
                             <p>${PRODUCTOS[i].descripcion}</p>
                         </div>
                         <button class="btn btn-dark" onclick="agregarProducto(${PRODUCTOS[i].productoId})">Seleccionar</button>
                 </div>`
            }
        }
        grilla.innerHTML = filas
        itemsEnCarrito()
    }

document.addEventListener("DOMContentLoaded", cargoProductos(grillaDeProductos))

function itemsEnCarrito() {
    //let leyendacarrito = "( )"
    document.getElementById("itemscarrito").innerText = `(${carrito.length})`
}

function agregarProducto(productoId) {
    //let filtro = carrito.find(c => c == productoId)
         { 
            carrito.push(productoId)
            alert("Excelente elección! Vé al carrito")
            itemsEnCarrito()
            addProduct()
        }
}

function removerProducto(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    carrito.length - 1;
    
}

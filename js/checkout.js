function muestroCheckout() {
    if (carrito.length === 0) {
        alert("Todavía no realizó ninguna compra.")
    } else {
        addProduct()
        // changuito = new shoppingCart(carrito, PRODUCTOS)
        // changuito.verCompra(checkout)
        // changuito.verTotales(totales)
        // shoppingcart.classList.remove("hide")    
        // productos.classList.add("hide")    
    }
}

function addProduct(){
    changuito = new shoppingCart(carrito, PRODUCTOS)
    changuito.verCompra(checkout)
    changuito.verTotales(totales)
    shoppingcart.classList.remove("hide")    
}


function confirmarCompra() {
    document.body.style.cursor  = "wait"
    setTimeout(() => {
        carrito = []
        alert("Su compra finalizó con éxito")
        // volverAlListadoDeProductos()
        itemsEnCarrito()
        document.body.style.cursor  = "default"
    }, 2000);
}

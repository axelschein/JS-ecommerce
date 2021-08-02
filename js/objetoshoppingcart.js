var fadeTime = 300;

// el carrito es esta clase con este constructor


class shoppingCart {
    constructor(carrito, productos) {
        var subtotal = 0;        
        this.carrito = carrito;
        this.productos = productos
        this.verCompra = function(grillaCheckout) {
            let grilla = ""
            for (let i in this.carrito) {// este for  tiene el .find que busca el producto seleccionado por el ID
                let r = productos.find(c => c.productoId === carrito[i])
                    grilla += `<div class="row shoppingCartItem" value="${r.productoId}">
                                <div class="col-2">
                                    <div class="shopping-cart-header">
                                    <img class="imgProduct2" src="${r.img}">
                                    
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="align-text-bottom">
                                        <p class="text d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">${r.nombre}</p>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="product-line-price">
                                        <p class="product-price ">$${r.price}</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-2">
                                        
                                        <button class="btn btn-danger" onclick="removeProduct()" value="${r.productoId}" id="delete">
                                        Delete
                                      </button>
                                    </div>
                                </div>
                            </div>`;
                    
                    subtotal += r.price 
                    
            }
            grillaCheckout.innerHTML = grilla
        }
                           
        this.verTotales = function(grillaTotales) {
        let grilla = `<tr><td>SUBTOTAL</td><td class="right">$ ${this.subtotal().toFixed(0)}</td></tr>
                        <tr><td>DESCUENTO</td><td class="right">-$ ${this.aplicoDescuento().toFixed(0)}</td></tr>
                        <tr class="blue lighten-4"><td>TOTAL</td><td class="right">$ ${this.total().toFixed(0)}</td></tr>`
            grillaTotales.innerHTML = grilla
        }
        
        this.subtotal = function() {
            
            return subtotal 
        }
        this.aplicoDescuento = function() {
            switch (this.carrito.length) {
                case 1: //aplico un 5%
                    return (subtotal - (subtotal * 0.95));
                    break
                case 2: //aplico un 20%
                    return (subtotal - (subtotal * 0.80));
                    break
                case 3: //aplico un 30%
                    return (subtotal - (subtotal * 0.70));
                    break
                case 4: //aplico un 40%
                    return (subtotal - (subtotal * 0.60));
                    break
                default:
                    return (subtotal)
            }
        }
        this.total = function() {
            return Number(subtotal - this.aplicoDescuento())
        }
    }
}



function removeProduct() {
    
    $("div.row.shoppingCartItem").remove();
    $("tbody#totales").remove()

    
    
}
function renderCarrito(){
    const carrito = cargarCarritoLS();
    let contenidoHTML = `<table class="table">
    <tbody>
    <tr>
    <td class="text-end" colspan="4"><button class="btn btn-danger btn-sm" onclick="vaciarCarrito();">Vaciar carrito <i class="bi bi-trash3-fill"></i></button></td>
    </tr>`;
    let hayProductos = false;
    
    if (totalProductos() > 0) {
        hayProductos = true;
        for (const producto of carrito){
            contenidoHTML += `<tr>
            <td><img src="../assets/imagenes-productos/${producto.imagen}" alt="${producto.nombre}" width="48"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="text-center align-middle"><span class="card-text text-center text-danger">$${producto.precio} ARS</span></td>
            <td class="text-end align-middle"><button class="btn btn-danger btn-sm" onclick="eliminarCarrito(${producto.id});">Eliminar <i class="bi bi-x-circle"></i></button></td>
            </tr>`;
        }
        
        contenidoHTML +=`</tbody>
        </table>`;

        contenidoHTML += `<table class="table">
        <tbody>
            <tr>
                <td class="text-start align-middle"><input type="text" class="form-control" id="cupon" placeholder="Ingrese Su cupón Aquí"></td>
                <td class="text-start align-middle"><button type="button" class="btn btn-primary" name="Enviar" value="Enviar" onclick="recibirCupon();">Confirmar Cupón</button></td>
                <td class="text-danger text-end align-middle d-inline-flex p-3">
                    <p id="mensajeFinal">El total de la compra es de: <strong>$</p>
                    <p id="precioFinal"> ${calcularTotal()}</p></strong>
                </td>
            </tr>`;

        contenidoHTML +=`</tbody>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-dark my-5 text-center" role="alert">
        <h2>Lo sentimos mucho</h2>
        <h3>No se encontraron Productos en el Carrito!</h3>
        </div>`;
    }

    document.getElementById("contenidoCarrito").innerHTML = contenidoHTML;

    return hayProductos;
}

// Función que ejecuta el método de pago si el carrito tiene productos
function actualizarCarritoYPago() {
    const hayProductos = renderCarrito();
    renderBotonCarrito();
    if (hayProductos) {
        obtenerPago();
    }
}

actualizarCarritoYPago();
renderCarrito();
renderBotonCarrito();

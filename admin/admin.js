function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    // llave seria la direccion de memoria, nombre de acceso a informacion
    // informacion a guardar es el objeto que vamos a guardar en localstorage, lo convierto en json "cadena de texto"
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
// retorno lista de productos 
function obtenerAlmacenamientoLocal(llave) {
    // lista convertidos como objeto js
    const listaProductos = JSON.parse(localStorage.getItem(llave));
    return listaProductos;
}
// lista de productos, almacena una lista de productos de lo contrario un array
let productos = obtenerAlmacenamientoLocal('productos') || [];
let mensaje = document.getElementById('mensaje');

//Añadir un producto
const añadirProducto = document.getElementById('productoAñadir');
const añadirValor = document.getElementById('valorAñadir');
const añadirImagen = document.getElementById('imagenAñadir');
const añadirId = document.getElementById('idAñadir');
const añadirValorN = document.getElementById('valorNadñadir');
const añadirFiltro = document.getElementById('filtroAñadir');

document.getElementById("botonAñadir").addEventListener("click", function (event) {
    event.preventDefault();
    let productoAñadir = añadirProducto.value;
    let valorAñadir = añadirValor.value;
    let valorNañadir = añadirValorN.value;
    let imagenAñadir = añadirImagen.value;
    let idAñadir = añadirId.value;
    let filtroAñadir = añadirFiltro.value;

    let van = true;

    if (productoAñadir == '' || valorAñadir == '' || imagenAñadir == '' ||  idAñadir == '' ||  filtroAñadir == '' || valorNañadir == '') {
        mensaje.classList.add('llenarCampos');
        setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500);
        van = false;
    }
    else {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre == productoAñadir) {
                mensaje.classList.add('repetidoError');
                setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500);
                van = false;
            }
        }
    }

    if (van == true) {
        productos.push({
            nombre: productoAñadir,
            valor: valorAñadir,
            valorNominal: valorNañadir,
            urlImagen: imagenAñadir,
            id: idAñadir,
            filtro: filtroAñadir
        });
        mensaje.classList.add('realizado');
        setTimeout(() => {
            mensaje.classList.remove('repetidoError');
            window.location.reload();
        }, 1500)
    }
    guardarAlmacenamientoLocal('productos', productos);
})

// Editar
const productoEd = document.getElementById('productoEditar');
const atributoEd = document.getElementById('atributoEditar');
const nuevoAtributoEd = document.getElementById('nuevoAtributo');

document.getElementById("botonEditar").addEventListener("click", function (event) {
    event.preventDefault();
    let productoEditar = productoEd.value;
    let atributoEditar = atributoEd.value;
    let nuevoAtributo = nuevoAtributoEd.value;
    let van = false;
    if (productoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
        mensaje.classList.add('llenarCampos');
        setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500);
    }
    else {
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id == productoEditar) {
                productos[i][atributoEditar] = nuevoAtributo;
                van = true;
            }
        }
        if (van == true) {
            mensaje.classList.add('realizado');
            setTimeout(() => {
                mensaje.classList.remove('realizado')
                window.location.reload()
            }, 1500);
        }
        else{
            mensaje.classList.add('noExisteError');
            setTimeout(() => { mensaje.classList.remove('noExisteError') }, 2500);
        }
        guardarAlmacenamientoLocal('productos', productos);
    }
})

// Eliminar
const productoE = document.getElementById('productoEliminar')

document.getElementById("botonEliminar").addEventListener("click", function (event) {
    event.preventDefault();
    let productoEliminar = productoE.value;
    let van = false
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == productoEliminar) {
            productos.splice(i, 1);
            van = true;
        }
    }
    if (van == false) {
        mensaje.classList.add('noExisteError');
        setTimeout(() => { mensaje.classList.remove('noExisteError') }, 2500);
    }
    else {
        mensaje.classList.add('realizado')
        setTimeout(() => {
            mensaje.classList.remove('realizado');
            window.location.reload();
        }, 1500);
    }
    guardarAlmacenamientoLocal('productos', productos);
})

// mostrar productos
window.addEventListener("load", () => {
    const productoEd = document.getElementById('productoEditar');
    const productoEl = document.getElementById('productoEliminar');
    if(productos.length > 0) {
        Object.keys(productos[0]).forEach(element => {
            atributoEd.innerHTML += `<option>${element}</option>`;
        });
    }
    // muestro productos
    let mostraProductos = document.getElementById('mostrarProductos');
    mostraProductos.innerHTML = '';
    for (let i = 0; i < productos.length; i++) {
        mostraProductos.innerHTML += `<div class="card col-3 ${productos[i].filtro}">
                                        <img class="card-img-top" src="${productos[i].urlImagen}">
                                        <div class="card-body">
                                            <h5 class="card-title">${productos[i].nombre}</h5>
                                            <p class="idProducto card-text">Codigo: ${productos[i].id}</p>
                                            <p>Valor Nominal: $${productos[i].valorNominal}</p>
                                            <div class="alert alert-warning text-center" role="alert">${productos[i].valor}</div>
                                        </div>
                                    </div>`;
    }
})
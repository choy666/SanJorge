// function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    // llave seria la direccion de memoria, nombre de acceso a informacion
    // informacion a guardar es el objeto que vamos a guardar en localstorage, lo convierto en json "cadena de texto"
    // localStorage.setItem(llave, JSON.stringify(valor_a_guardar));
// }
// retorno lista de productos 
// function obtenerAlmacenamientoLocal(llave) {
    // lista convertidos como objeto js
//     const listaProductos = JSON.parse(localStorage.getItem(llave));
//     return listaProductos;
// }

//inicializacion
var checCard1;
var checCard2;
var checCard3;
var checCard4;
var card1;
var card2;
var card3;
var card4;
var link_wsp_nro="https://api.whatsapp.com/send?phone=+543834046923h&text= Hola!, estoy interesado en este plan. Como puedo inscribirme?😄.";
var link_wsp;
var producto;
// lista de productos, almacena una lista de productos de lo contrario un array
// let productos = obtenerAlmacenamientoLocal('productos') || [];

// let contendorProductos = document.getElementById('contenedorProductos');
let contendorProductos = document.getElementById('contenedorProductos');

function iniciar(){

    checCard1 = document.getElementById('seccion1');
    checCard2 = document.getElementById('seccion2');
    checCard3 = document.getElementById('seccion3');
    checCard4 = document.getElementById('seccion4');
    checCard1.checked = true;
    checCard2.checked = true;
    checCard3.checked = true;
    checCard4.checked = true;

    checCard1.addEventListener('click', filtro);
    checCard2.addEventListener('click', filtro);
    checCard3.addEventListener('click', filtro);
    checCard4.addEventListener('click', filtro);
    //filtros
    card1 = document.getElementsByClassName('card1');
    card2 = document.getElementsByClassName('card2');
    card3 = document.getElementsByClassName('card3');
    card4 = document.getElementsByClassName('card4');
    filtro();

    // muestro los productos

    // contendorProductos.innerHTML = '';
    // for(let i = 0; i < productos.length; i++) {
    //     contendorProductos.innerHTML += `<div class="card col-6 col-lg-3 border-danger ${productos[i].filtro}">
    //                                         <img class="card-img-top" src="${productos[i].urlImagen}">
    //                                         <div class="card-body">
    //                                             <h5 class="card-title">${productos[i].nombre}</h5>
    //                                             <p class="card-text">Codigo: ${productos[i].id}</p>
    //                                             <p class="card-text">Valor Nominal: ${productos[i].valorNominal}</p>
    //                                             <div class="alert alert-warning text-center card-precio" role="alert">$${productos[i].valor}</div>
    //                                             <a href="https://wa.link/s905gq" id="${productos[i].id}"><button type="button" class="btn btn-outline-danger col-12">Suscribirme</button>
    //                                         </div>
    //                                     </div>`;
    //     link_wsp = document.getElementById(productos[i].id);
    //     producto=productos[i].urlImagen;
    //     link_wsp.setAttribute("href",link_wsp_nro+" Codigo: "+productos[i].id+" Nombre: "+productos[i].nombre+" "+producto);
    // }
}
function filtro(){
    if(checCard1.checked == false){
        for(var i=0; i<card1.length; i++){
            card1[i].style.display = 'none';
        }
    }
    else{
        for(var i=0; i<card1.length; i++){
            card1[i].style.display = 'flex';
        }
    }
    if(checCard2.checked == false){
        for(var i=0; i<card2.length; i++){
            card2[i].style.display = 'none';
        }
    }
    else{
        for(var i=0; i<card2.length; i++){
            card2[i].style.display = 'flex';
        }
    }
    if(checCard3.checked == false){
        for(var i=0; i<card3.length; i++){
            card3[i].style.display = 'none';
        }
    }
    else{
        for(var i=0; i<card3.length; i++){
            card3[i].style.display = 'flex';
        }
    }
    if(checCard4.checked == false){
        for(var i=0; i<card4.length; i++){
            card4[i].style.display = 'none';
        }
    }
    else{
        for(var i=0; i<card4.length; i++){
            card4[i].style.display = 'flex';
        }
    }
}
window.addEventListener("load",iniciar);
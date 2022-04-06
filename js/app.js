/*const inputColor= document.querySelector('#inputColor');
const btnVisualizar= document.querySelector('#btnVisualizar');
const parrafoExa= document.querySelector('#parrafoExa');
const cardColor= document.querySelector('#cardColor');

console.log(inputColor.value);
btnVisualizar.addEventListener("click",()=>{
    console.log('me diste click');
    console.log(inputColor.value);
    parrafoExa.textContent=inputColor.value;
    cardColor.style.backgroundColor=inputColor.value;
    btnVisualizar.style.backgroundColor=inputColor.value;

})*/


/*
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn');

const carritoObjeto={};
const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);
    const producto = {
        
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1
    };
       //console.log(producto);


    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo]=producto;
    pintarCarrito(producto);

    //console.log(producto)
}

const pintarCarrito=(producto)=>{
    //console.log("pintar carrito", producto)
    carrito.textContent='';
    Object.values(carritoObjeto).forEach((item)=>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent=item.id;
        console.log(item.titulo)
        clone.querySelector('.badge').textContent=item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment)
};

btnesBotones.forEach((btn)=>btn.addEventListener("click",agregarAlCarrito))

*/

/*const inputColor= document.querySelector('#inputColor');
const btnVisualizar= document.querySelector('#btnVisualizar');
const parrafoExa= document.querySelector('#parrafoExa');
const cardColor= document.querySelector('#cardColor');

console.log(inputColor.value);
btnVisualizar.addEventListener("click",()=>{
    console.log('me diste click');
    console.log(inputColor.value);
    parrafoExa.textContent=inputColor.value;
    cardColor.style.backgroundColor=inputColor.value;
    btnVisualizar.style.backgroundColor=inputColor.value;

})*/



const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll('.card .btn');

const carritoObjeto=[];
const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);
    const producto = {
        
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad:1
    };
  
    const indice=carritoObjeto.findIndex((item) => item.id===producto.id);
    if(indice === -1){
        carritoObjeto.push(producto);
    }else{
        carritoObjeto[indice].cantidad++;
    }

    pintarCarrito(carritoObjeto);

}

const pintarCarrito=(array)=>{
    //console.log("pintar carrito", producto)
    carrito.textContent='';
    array.forEach((item)=>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent=item.id;
        console.log(item.titulo)
        clone.querySelector('.badge').textContent=item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
};

btnesBotones.forEach((btn)=>btn.addEventListener("click",agregarAlCarrito))


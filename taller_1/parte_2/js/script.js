function Producto(imagen, nombre, stikers, color_fondo, marca, precio) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.stikers = stikers;
    this.color_fondo = color_fondo;
    this.marca = marca;
    this.precio = precio;
    this.cantidad = 1;
}

// Se crea el carrito
let carrito = [];

const icono_carrito = document.querySelector("#icono_carrito");
const div_carrito = document.querySelector("#carrito");
const lista_carrito = document.querySelector("#lista_carrito");

function actualizar_lista_carrito(nuevo_prod){
    let nuevo = true;
    carrito.forEach(prod => {        
        if(prod.nombre === nuevo_prod.nombre){
            prod.cantidad++;
            nuevo = false;
        }
    });

    if(nuevo){
        carrito.push(nuevo_prod);
    }
    
}

function actualizar_carrito() {
    const li = document.createElement("li");
    lista_carrito.innerHTML='';
    carrito.forEach(prod => {
        li.innerHTML = `
        <span class="separador"></span>
                <span>
                    <img class="contenido_carrito"
                        src="${prod.imagen}"
                        alt>
                </span>
                <span class="separador"></span>
                <span class="contenido_carrito"><span>${prod.nombre}</span></span>
                <span class="separador"></span>
                <span class="contenido_carrito"><span>${prod.precio}</span></span>
                <span class="separador"></span>
                <span class="contenido_carrito"><span>${prod.cantidad}</span></span><span
                    class="separador"></span>
        `;
        lista_carrito.appendChild(li); 
    });
}


// Se recibe la información del producto y se ingresa en el carrito
const botones_agregar_carrito = document.querySelectorAll(".boton_comprar button");
botones_agregar_carrito.forEach(boton => {
    boton.addEventListener("click", () => {
        const div_producto = boton.parentElement.parentElement;
        const nombre = div_producto.querySelector(".titulo_producto span").textContent;
        const imagen = div_producto.querySelector(".imagen_producto img").src;
        const stikers = div_producto.querySelector(".stikers").textContent;
        const color_fondo = div_producto.querySelector(".color_fondo").textContent;
        const marca = div_producto.querySelector(".marca").textContent;
        const precio = div_producto.querySelector(".precio").textContent;
        const nuevo_producto = new Producto(imagen, nombre, stikers, color_fondo, marca, precio);
        actualizar_lista_carrito(nuevo_producto);        
        actualizar_carrito();
        console.log(carrito);
        
    });
});




// Se muestra el carrito
icono_carrito.addEventListener("mouseenter", () => {
    div_carrito.style.display = "block";
});

div_carrito.addEventListener("mouseleave", () => {
    div_carrito.style.display = "none";
});





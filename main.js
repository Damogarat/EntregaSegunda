function saludar() {
    alert ('Bienvenido/a a la tienda online de la gintonería HIDDEN del barrio de Belgrano!!' + '\u{1f378}' + '\u{1f378}' +  '\u{1f378}');
}
saludar();

let nombre = prompt('Ingresá tu nombre');
alert('Bienvenido/a ' + nombre + '!' + '\u{1F600}' + ' Te vamos a hacer un par de preguntas para verificar que podemos entregarte nuestros productos!' + ' Responde con si/no'+ '\u{1F46E}');


let respuesta;
const SI = 'si';
const NO = 'no';
let puedeComprar = false;

respuesta = prompt ('Vivís en Belgrano?').toLowerCase().trim();
if(respuesta == SI){
    respuesta = prompt('Sos mayor de edad?').toLowerCase().trim();

    if(respuesta == SI) {
        alert('Genial!! Podés ingresar a la Tienda' + '\u{1f37E}' + '\u{1f37E}' + '\u{1f37E}');
        
    puedeComprar = true;

    }else{ 
        alert('\u{1F6D1}' + 'Solo vendemos bebidas alcoholicas a mayores de edad' + '\u{1F6D1}'); 
    }

    }else {
    alert('Lo sentimos. Sólo hacemos delivery por la zona.' + '\u{1F622}');
}


let continuar = prompt("Vas a ingresar a la tienda online. Te avisamos que solo vamos a entregarte bebidas si presentas tu DNI y únicamente por la zona de Belgrano. Queres continuar??").toLowerCase().trim();
const carrito = [];
let total;
let mostrar = false;

 function confirmacion(continuar) {
    verificacion(continuar);
} 

function verificacion(continuar) {
    while(continuar !="si" && continuar != "no") {
        continuar = prompt("Responde con si/no para continuar").toLowerCase().trim();
    }
    if (continuar == "si") {
        mostrarProductos("Estos son los productos que tenemos para ofrecerte",lista,total,false);
        comprar(lista);
    }
    else if (continuar == "no" && carrito.length != 0){
        mostrar = true;
        mostrarProductos("estos son los productos en tu carrito ",carrito, total,true); 
        alert("gracias por tu visita!!!" + "\u{1f44B}");
    }
    else{
        alert("gracias por tu visita!!!" + "\u{1f44B}"); 
    }
}


function comprar(lista) {
    let pedido = prompt("Ingresá el nombre de la bebida que estás buscando!");
    let mensaje = ("la bebida no fue encontrada");
    const result = lista.find((ele) => ele.nombre == pedido);
    if (result != undefined  ) {
        carrito.push(new Producto(result.nombre, result.destileria, result.precio));
        total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        alert("Tu compra fue añadida al carrito!!");
        continuar = prompt("¿Querés comprar algo mas??").toLowerCase().trim();
        verificacion(continuar);
    }
    else{
        alert (mensaje);
        continuar = prompt("¿Queres intentar con otra bebida?").toLowerCase().trim();
        verificacion(continuar);
    }
}



confirmacion(continuar);

 





 

/* let precio = 3000;
let cantidad;
let total = 0; 
let continuar = 'si';

if (puedeComprar) {
    do {
    cantidad = +prompt('ingrese cantidad de botellas de gin HIDDEN');
    total = total + (precio * cantidad);
    continuar = prompt('desea ingresar otro item en el carrito? si/no'); 
    }
 while (continuar == 'si');
alert('El total del carrito es de $' + total);
} else {
    
    alert('No puedes comprar en nuestra tienda. Gracias por visitarnos!!!');
} */


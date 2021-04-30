let dom = document.getElementById("dom");

let img = document.createElement("div");

dom.appendChild(img);

img.setAttribute("id", "imagen");

let imgSec = document.createElement("img");

imgSec.setAttribute("src", "./imagen clipart.jpg");

img.appendChild(imgSec);

let encabezado = document.createElement("div");

dom.appendChild(encabezado);

encabezado.setAttribute("id", "encabezado");

let encabezadoSec = document.createElement("p");

encabezado.appendChild(encabezadoSec);

encabezadoSec.innerHTML = "<h1> Cómo añadir un efecto a una imagen </h1>"

let cuerpo = document.createElement("div");

dom.appendChild(cuerpo);

cuerpo.setAttribute("id", "cuerpo");

let cuerpoSec = document.createElement("p");

cuerpo.appendChild(cuerpoSec);

cuerpoSec.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imagenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un moton de codigo a la pagina, que termina afectando a la velocidad de la web en si. Si quieres utilizar muy poco codigo para asi optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."

let boton = document.createElement("div");

dom.appendChild(boton);

boton.setAttribute("id", "boton");

let botonSec = document.createElement("p");

boton.appendChild(botonSec);

botonSec.innerHTML = "Leer más";
let contenedor = document.querySelector('.container');
let nombre = document.getElementById('Nombre');
let boton = document.getElementById('boton');

let contenedor1 = document.querySelector('.container-1');
let correo = document.getElementById('correo');
let boton2 = document.getElementById('boton-2');


boton.addEventListener('click',enviar);

function enviar(){
	alert(`Usuario registrado: ${nombre.value}`);

}

boton2.addEventListener('mousedown',()=>{
	alert(`Correo registrado: ${correo.value}`);
})
let contenedor = document.querySelector('.container');
let nombre = document.getElementById('Nombre');
let boton = document.getElementById('boton');

boton.addEventListener('click',enviar);

function enviar(){
	alert(`Usuario registrado: ${nombre.value}`);

}


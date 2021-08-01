let contenedor = document.querySelector('.container');
let nombre = document.getElementById('Nombre');
let boton = document.getElementById('boton');

let contenedor1 = document.querySelector('.container-1');
let correo = document.getElementById('correo');
let boton2 = document.getElementById('boton-2');

let dibujo = document.getElementById('canvas');
let lienzo = dibujo.getContext('2d');



boton.addEventListener('click',enviar);

boton2.addEventListener('mousedown',()=>{
	alert(`Correo registrado: ${correo.value}`);
})


function enviar(){
	alert(`Usuario registrado: ${nombre.value}`);

}

function drawLine(color,x_i,y_i,x_f,y_f){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_i,y_i);
	lienzo.lineTo(x_f,y_f);
	lienzo.stroke();
	lienzo.closePath();
}

let teclas = {
	UP:38,
	DOWN : 40,
	LEFT : 37,
	RIGHT : 39
};

let xi = dibujo.width/2;
let yi = dibujo.height/2;
let col = 'black';


document.addEventListener('keydown',Culebrear);

function Culebrear(tecla){

	let mov = 10;

	switch(tecla.keyCode){

		case teclas.UP:
			drawLine(col,xi,yi,xi,(yi-mov));
			yi = yi - mov;
			break;
		case teclas.DOWN:
			drawLine(col,xi,yi,xi,(yi+mov));
			yi = yi +mov;
			break;

		case teclas.LEFT:
			drawLine(col,xi,yi,(xi-mov),yi);
			xi = xi -mov;
			break;

		case teclas.RIGHT:
			drawLine(col,xi,yi,(xi+mov),yi);
			xi = xi + mov;
			break;
		default:
			console.log('Otra tecla');
	}
}

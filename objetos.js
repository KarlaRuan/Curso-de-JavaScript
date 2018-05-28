//JSON
//Declaracion de propiedades y metodos
let curso={
	titulo: 'Curso Profesional de JavaScript',
	duracion: 2.2,
	formato: 'video',
	bloque: ['Introduccion','Funciones'],
	inscribir: function(usuario){
		console.log(usuario+" ahora esta inscrito");
	}
}
//Se puede reasignar un valor a alguna parte de la estructura
curso.titulo='Curso base de javaScript';
console.log(curso.titulo);
//console.log(curso['titulo']);
curso.inscribir('Uriel');


//Funcion constructora
function Curso(titulo){
	this.titulo=titulo;

	this.inscribir=function(usuario){
		console.log(usuario+" se ha inscrito");
	}
}

//Se crea un objeto a partir de la función constructora
let cursoJS=new Curso("Curso Profesional de JavaScript");
let cursoRuby=new Curso("Curso de Ruby");

console.log(cursoJS.titulo);
console.log(cursoRuby.titulo);
cursoJS.inscribir("Uriel");
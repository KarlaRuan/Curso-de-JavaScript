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
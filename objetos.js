//JSON
//Declaracion de propiedades y metodos
/*let curso={
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

cursoJS.inscribir("Uriel");*/

//CLASES

//Class declaration (es la declaración más común)
/*class Curso{
	constructor(titulo){
		this.titulo=titulo;
	}

	inscribir(usuario){
		console.log(usuario+" se ha inscrito");
	}
}

let javaScriptCurso=new Curso("Curso Profesional de javaScript");
console.log(javaScriptCurso.titulo);
javaScriptCurso.inscribir("Karla");*/	
//Class expression
/*let Curso=class{}
let Usuario=class Usuario{}*/

//CONSTRUCTORES
//Cuando se manda llamar la clase se ejecuta esta función de manera inmediata
/*class Curso{
	constructor(titulo,duracio,color='blue'){
		this.titulo=titulo;
		this.duracion=duracion;
		this.color=color;
	}
}
new Curso("Nombre del curso");*/

//HERENCIA
//Sirve para reutilizar codigo y no sea repetitivo
/*class Player{
	play(){this.video.play();}
	duration(){return this.video.duration/100;}
}
class Vimeo extends Player{
	open(){this.redirectToVimeo(this.video);}
}
class YouTube extends Player{
	open(){this.redirectToYouTube(this.video);}
}
let video =new YouTube();
video.play();

class CustomeDate extends Date{}
class Coleccion extends Array{}*/

class User{
	constructor(nombre){
		this.nombre=nombre;
	}
	saludar(){
		console.log("Hola " +this.nombre);
	}
}
class Admin extends User{
	constructor(nombre){
		super(nombre);
	}
	saludar(){
		super.saludar(); //Toma lo que tenga la función saludar
		console.log("Administrador");
	}
}
let admin=new Admin("Karla");
admin.saludar();
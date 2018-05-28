//GETTER
//SET Solo recibe un argumento no 0 no más de 1
class Usuario{
	constructor(nombre){this._name=nombre;}

	get name(){ /*Como se muestra*/
		return this._name.charAt(0).toUpperCase()+this._name.slice(1);
	}
	set name(nombre){ /*Sirve para cambiar la propiedad*/
		this._name=nombre;
	}
}
let user=new Usuario("yesenia");
user.name="marcos";
console.log(user.name);
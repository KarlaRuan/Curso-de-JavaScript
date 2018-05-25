console.log("1)Pares e impares");
console.log("2)Suma, resta, multiplicacion y division");
console.log("3)Juego del número mágico");
let op=prompt("Elige una opción");

switch (op){
	case 1: let n1 = prompt();
			if(n1 %2 != 0 )
			console.log("El numero es impar");
			else console.log("El numero es par");
		break;
	case 2: n1=prompt("Ingresa un numero");
			let n2=prompt("Ingresa otro numero");
			let suma=parseInt(n1)+parseInt(n2);
			console.log("La suma es ",suma);
		break;
	case 3: const num=10;
			let n;
			do{
			let n=prompt("Ingresa un numero");
			n=parseInt(n);

				if(n>num) console.log("El numero es menor");
				else console.log("El numero es mayor");
			}while(n==num);
}
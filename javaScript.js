console.log("1)Pares e impares");
console.log("2)Suma, resta, multiplicacion y division");
console.log("3)Juego del número mágico");
let op=prompt("Elige una opción");

switch (parseInt(op)){
	case 1: let n = prompt();
			if(n %2 != 0 )
			console.log("El numero es impar");
			else console.log("El numero es par");
		break;
	case 2: let n1=prompt("Ingresa un numero");
			let n2=prompt("Ingresa otro numero");
			let resul=parseInt(n1)+parseInt(n2);
			console.log("La suma es ",resul);
			resul=parseInt(n1)-parseInt(n2);
			console.log("La resta es ",resul);
			resul=parseInt(n1)*parseInt(n2);
			console.log("La multiplicacion es ",resul);
			resul=parseInt(n1)/parseInt(n2);
			console.log("La division es ",resul);
		break;
	case 3: const num=10;
			let number=0;
			do{
			number=prompt("Ingresa un numero");
			number=parseInt(number);

				if(number>num) console.log("El numero es menor");
				else if (number<num) console.log("El numero es mayor");
					else console.log("Adivinaste el numero");
			}while(number!=num);
		break;
}
function ordenarNumeros() {
  let num1 = parseInt(prompt("Ingrese el primer número: "));
  let num2 = parseInt(prompt("Ingrese el segundo número: "));
  let num3 = parseInt(prompt("Ingrese el tercer número: "));

  let numeros = [num1, num2, num3];
  let mayorAMenor = [...numeros].sort((a, b) => b - a);
  let menorAMayor = [...numeros].sort((a, b) => a - b);

  if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales");
  } else {
    console.log("De mayor a menor: " + mayorAMenor);
    console.log("De menor a mayor: " + menorAMayor);
  }
}

ordenarNumeros();

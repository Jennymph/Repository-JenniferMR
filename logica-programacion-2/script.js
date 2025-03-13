function solicitandoCelsius() {
  let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius"));
  if (isNaN(celsius)) {
    alert("Por favor, ingrese un valor numérico");
    return solicitandoCelsius();
  }
  return celsius;
}

function convertirTemperatura(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  let kelvin = celsius + 273.15;
  return { kelvin, fahrenheit };
}

function mostrarResultado(kelvin, fahrenheit) {
  alert(
    "Grados Kelvin: " +
      `${kelvin}°K` +
      "\n" +
      "Grados Fahrenheit: " +
      `${fahrenheit}°F`
  );
}

function main() {
  let celsius = solicitandoCelsius();
  let { kelvin, fahrenheit } = convertirTemperatura(celsius);
  mostrarResultado(fahrenheit, kelvin);
}

window.onload = main;

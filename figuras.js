// Código del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {

    return lado * 4;

}
// console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');

console.groupEnd();

// Código del triángulo
console.group('Triángulos')

// const lado1 = 6;
// const lado2 = 6;
// const base = 4;
// console.log(
//     'Los lados del triángulo miden: ' 
//     + lado1 + 'cm, ' 
//     + lado2 + 'cm, ' 
//     + base + 'cm.'
// );

// const altura = 5.5;
// console.log('La altura ddel triángulo es de: ' + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
console.log(perimetroTriangulo);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log('El área del triángulo e: ' + areaTriangulo + 'cm^2');

console.groupEnd();

// Código del círculo
console.group('Círculos');

// Radio
// const radioCirculo = 4;
// console.log('El radio del círculo mide: ' + radioCirculo + 'cm');

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
console.log(diametroCirculo)

// PI
const PI = Math.PI;
console.log('PI es: ' + PI + 'cm');

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Altura de un triángulo isósceles.
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if(trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}


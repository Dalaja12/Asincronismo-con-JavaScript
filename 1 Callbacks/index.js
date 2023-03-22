function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, suma) {
    return suma (num1,num2);
};

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log('Hola java');
}, 5000);

function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

setTimeout(saludar, 2000, 'yo');
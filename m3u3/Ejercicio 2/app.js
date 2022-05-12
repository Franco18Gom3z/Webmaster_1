let num1,num2,num3;

num1 = prompt('Ingrese el primer numero' + '')
num2 = prompt('Ingrese el segundo numero' + '')
num3 = prompt('Ingrese el tercer numero' + '')

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

if (num1 > num2 && num1 > num3) {
    alert("El mayor es el " + num1);
}
else if (num2 > num3) {
    alert("El mayor es el " + num2);
}else {
    alert("El mayor es el " + num3);
}
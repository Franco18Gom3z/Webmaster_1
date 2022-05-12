let distanciaRecorrer = prompt("Cuanto tiene que recorrer?");


if (distanciaRecorrer >= 0 && distanciaRecorrer < 1000) {
    alert("Ir a pie");
}
else if (distanciaRecorrer >= 1000 && distanciaRecorrer < 10000) {
    alert("Ir en bicicleta");
}
else if (distanciaRecorrer >= 10000 && distanciaRecorrer < 30000) {
    alert("Ir en colectivo");
}
else if (distanciaRecorrer >= 30000 && distanciaRecorrer < 100000) {
    alert("Ir en auto");
}
else if (distanciaRecorrer >= 100000) {
    alert("Ir en avion");
}
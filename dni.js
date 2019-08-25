function verificarDV(dniIngresado){
    //Variables
    var dni = dniIngresado;
    var cuerpo = "";
    var dv = "";
    var sumaTotal = 0;
    var multiplicador = 2;
    var dvEsperado;

    //Sacar puntos, comas y guión
    dni = dni.replace(/\D/g, "");
    //Separar cuerpo y digíto verificador
    cuerpo = dni.slice(0,-1);
    dv = dni.slice(-1);

    dniIngresado.value = cuerpo +'-'+ dv;

    //Bucle para multiplicar cada caracter y sumar su resultado
    for(i = 1; i <= cuerpo.length; i++) {
        //Extrae cada caracter desde atrás a adelante y lo múltiplica
        sumaParcial = multiplicador * dni.charAt(cuerpo.length - i);
        //El resultado de la multipliación se va acumulando
        sumaTotal = sumaTotal + sumaParcial;
        //Se define el multiplicador este dentro del rango 2 y 7 y vaya subiendo de 1 en 1
        if(multiplicador < 7){ 
            multiplicador = multiplicador + 1;
        } else {
            multiplicador = 2; 
            }
    }
    //Obtener DV esperado sacando el resto de la suma dividida en 11. Luego a eso restarle el resto
    dvEsperado = 11 - (sumaTotal % 11);
    //Casos especiales del RUT
    switch (dvEsperado){
        case 10:
            dvEsperado = "K";
            break;
        case 11:
            dvEsperado = "0";
            break;
    }
    //Validar con DV ingresado
    if(dv == dvEsperado){        
        alert("RUT válido")
    } else{
        alert("RUT inválido")
    }
}
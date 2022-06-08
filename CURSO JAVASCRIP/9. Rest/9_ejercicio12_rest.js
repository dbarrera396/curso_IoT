function calcularNumeroMayor(...numeros){
    let nuemroMayor = numeros[0];
    for (let i=1; i <= numeros.length; i++){
        if (numeros[i]>nuemroMayor){
            nuemroMayor=numeros[i];
        }

    }

return nuemroMayor;
}

console.log(calcularNumeroMayor(20,48,1,24,41,3));
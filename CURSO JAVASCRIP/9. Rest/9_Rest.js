function suma (...numeros){
    let total =0;
    numeros.forEach(numeros=> total += numeros);
    return total;
}
console.log(suma(1,2,3,4,5));
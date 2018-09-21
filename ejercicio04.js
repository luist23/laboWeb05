function binario(numero){
    let binario="";
    while(numero>1){
        console.log(numero);
        if(numero%2==0){
            binario+="0";
        }
        else binario+="1";
        numero = Math.round(numero/2);
    }
    return binario;
}
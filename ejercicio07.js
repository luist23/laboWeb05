function bisiesto(anho){
    if ((anho%4==0 && anho%100!=0) || anho%400==0){
        return true;
    }
    return false;
}
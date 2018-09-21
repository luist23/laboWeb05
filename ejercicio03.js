function fibonnachi(n){
    let segundo=1;
    let primero=1;
    for(let i=3;i<=n;i++){
        let temp=primero+segundo;
        primero=segundo;
        segundo=temp;
    }
    if(n<=2){
        return 1;
    }
    return primero + segundo;

}
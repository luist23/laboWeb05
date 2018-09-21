
function ordenarArray(palabraLista){
    
    let temp=palabraLista;
    while(true){
        for(let i=0 ; i<(temp.length-1);i++){
            
            if(temp[i]>temp[i+1]){
                let temp2=temp[i];
                temp[i]=temp[i+1];
                temp[i+1]=temp2;
                
                console.log(temp);
                continue;
                
            }
        }
        break;
        
    }
    return palabra;

};


function palabraPalindroma(palabra){
let palabratemp = palabra.split("").reverse().join("");
return palabra==palabratemp;
}

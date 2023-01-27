let nums=[4,6,1,9];
let suma=0;
// salida = 18
for(let i=0; i<nums.length;i++){
    if((nums[i]%2)!=0){
        suma+=nums[i];
    }
}
console.log("Suma="+suma);

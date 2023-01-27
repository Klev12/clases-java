let nums=[11,5,8,7,22];
let suma=0;

for(let i=0; i<nums.length;i++){
    if(nums[i]>10){
        suma+=nums[i];
    }
}
console.log("suma mayor a 10 ="+suma);

function max_array(nums) {
    let aux = nums[0];
    for(i = 0; i < nums.length; i++) {
        if(nums[i]>aux) aux = nums[i];
    }
    return aux;
}
let numeros = [1,2,1,5,4,67,3,6,6,1,2,10,13,22]

console.log(max_array(numeros));
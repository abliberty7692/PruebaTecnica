let nums = [1,2,1,5,4,67,3,6,6,1,2,10,13,22]

function no_repeat(nums) {
    return nums.filter((num, index)=>{
        return nums.indexOf(num) === index;
    });
}

console.log(no_repeat(nums));

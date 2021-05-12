function oddOrEven(num){
    if(typeof num != 'number'){
        throw new Error(`${num} is not a number`)
    }
    return `${num} is ${num % 2 == 0 ? 'even' : 'odd'}`
}

var x = oddOrEven("banana")
var x = oddOrEven(7)
console.log(x)


function largestNum(nums){
  let largest = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if(num == largest){
      count++
    }
    if(num > largest){
      largest = num
      count = 1
    }
  }
  
  return count > 1 
    ? { [largest]: count }
    : largest
}
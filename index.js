function hasTargetSum(array, target) {
  for(let i=0; i<array.length; i++){
    let complement=target-array[i];
    for(let j=1+i; j<=array.length; j++){
      if (array[j]===complement) return true;
      }
    }
    return false
  } 


/* 
  Write the Big O time complexity of your function here
  the outer loop, loops through n times 0(n),
  the inner loop,loops through the inner and outer loop n times
  Big on being 0(n*n)
  =O(n^2) 
*/

/* 
  Add your pseudocode here
  Loop through the array,
  pick the first element, and find a complement=target-array[i]
  loop through the remaining numbers from index 2, and they should a number matching the complement
  if the second loop=compliment,  return true
  if now match is found, return false
*/

/*
  Add written explanation of your solution here
  e.g if numbers = [1,2,4,5,6] and target is 9, the function should return true
  since two of the numbers in the loop add up to 9
  for numbers=[1,2,3,6,8], target is 20, the function should return false
  since no pair in the array can give a sum of 20

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;



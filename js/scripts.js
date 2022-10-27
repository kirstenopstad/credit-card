

function validateCC(number) {
  // Split input by spaces, join to get rid of them, split again to make each number a single element
  const numNoSpace = number.split(" ").join("").split("");
  console.log(numNoSpace);
  console.log(numNoSpace.length);
  // Iterate over array from right to left, incrementing by -2
  for (i=(numNoSpace.length - 1); i >= 0; i-=2) { 
    // Double every other number
    let doubled = parseInt(numNoSpace[i]) * 2;
    if(doubled>=10) {
      doubled = parseInt(doubled.toString()[0]) + parseInt(doubled.toString()[1]);
    };
    numNoSpace[i] = doubled;

  return numNoSpace;
} 

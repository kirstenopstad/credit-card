

function validateCC(number) {

  const numNoSpace = number.split(" ").join("").split("");
  console.log(numNoSpace);
  console.log(numNoSpace.length);
  let ctr = 0;
  for (i=(numNoSpace.length - 1); i >= 0; i--) { 
    if (ctr % 2 === 0) {
      let doubled = parseInt(numNoSpace[i]) * 2;
      if(doubled>=10) {
        let doubledSum = parseInt(doubled.toString()[0]) + parseInt(doubled.toString()[1]);
        numNoSpace[i] = doubledSum;
      } else {
      numNoSpace[i] = doubled;
      }; 
    } else {
      numNoSpace[i] = parseInt(numNoSpace[i]);
    }
    ctr++;
    
  return numNoSpace;
  } 

}
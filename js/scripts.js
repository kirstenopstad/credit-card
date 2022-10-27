

function validateCC(number) {

  let output = [];
  const numNoSpace = number.split(" ").join("");
  console.log(numNoSpace);
  console.log(numNoSpace.length);
  for (i=(numNoSpace.length - 1); i >= 0; i-=2) {
    let doubled = parseInt(numNoSpace[i]*2);
    if(doubled>=10) {
      doubled = parseInt(doubled.toString()[0]) + parseInt(doubled.toString()[1]);
    }
    output.push(doubled);
  } 
  return output;
}
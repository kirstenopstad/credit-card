

function validateCC(number) {

  let output = [];
  const numNoSpace = number.split(" ").join("");
  console.log(numNoSpace);
  console.log(numNoSpace.length);
  for (i=(numNoSpace.length - 1); i >= 0; i-=2) {
    output.push(numNoSpace[i]);
    console.log(numNoSpace[i]);
  } 
  return output;
}
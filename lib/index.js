function cpfValidator(number) {
  const arraySum = [];
  const arraySum2 = [];
  const arrayCpf = number.toString().split("");
  const penultIndex = number.toString().slice(0, 9).split("");
  const finalIndex = number.toString().slice(0, 10).split("");

  multiplyArrayPenult(arraySum, penultIndex);
  multiplyArrayFinal(arraySum2, finalIndex);

  const rest = restIsGreaterThanTwo(arraySum);
  const rest2 = restIsGreaterThanTwo2(arraySum2);
  
  let a = comparePenultIndex(arrayCpf, rest);
  let b = compareLastIndex(arrayCpf, rest2);

  if(typeof number === "string") return false;

  if (a && b) {
    return true;
  }else{
    return false;
  }
}

function multiplyArrayPenult(arraySum, penultIndex) {
  penultIndex.map((num, index) => {
    return arraySum.push((10 - index) * num);
  });
}

function multiplyArrayFinal(arraySum2, finalIndex) {
  finalIndex.map((num, index) => {
    return arraySum2.push((11 - index) * num);
  });
}

function sumAll(arraySum) {
  return arraySum.reduce((acc, cur) => acc + cur);
}


function moduleSum(arraySum) {
  return sumAll(arraySum) % 11;
}

function restIsGreaterThanTwo(arraySum) {
  if (moduleSum(arraySum) >= 2) {
    return 11 - moduleSum(arraySum);
  } else if (moduleSum(arraySum) < 2) {
    return 0;
  }
}

function restIsGreaterThanTwo2(arraySum2) {
  if (moduleSum(arraySum2) >= 2) {
    return 11 - moduleSum(arraySum2);
  } else if (moduleSum(arraySum2) < 2) {
    return 0;
  }
}

function comparePenultIndex(arrayCpf, rest) {
  return Number(arrayCpf[9]) === rest;
}

function compareLastIndex(arrayCpf, rest) {
  return Number(arrayCpf[10]) === rest;
}

module.exports = cpfValidator;
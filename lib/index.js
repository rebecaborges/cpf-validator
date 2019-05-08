function cpfValidator(number) {
  if (!number
    || typeof number === "string"
    || number.toString().length < 10
    || number.toString().length > 11
    || number === 11111111111
    || number === 22222222222
    || number === 33333333333
    || number === 44444444444
    || number === 55555555555
    || number === 66666666666
    || number === 77777777777
    || number === 88888888888
    || number === 99999999999
  ) {
    return false;
  } else {
    const arraySum = [];
    const arraySum2 = [];
    const arrayCpf = number.toString().split("");
    const penultIndex = number.toString().slice(0, 9).split("");
    const finalIndex = number.toString().slice(0, 10).split("");

    multiplyArrayPenult(arraySum, penultIndex);
    multiplyArrayFinal(arraySum2, finalIndex);

    const rest = restIsGreaterThanTwo(arraySum);
    const rest2 = restIsGreaterThanTwo2(arraySum2);

    const penult = comparePenultIndex(arrayCpf, rest);
    const final = compareLastIndex(arrayCpf, rest2);

    return (penult && final);
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

function sumAll(sum) {
  return sum.reduce((acc, cur) => acc + cur);
}

function moduleSum(sum) {
  return sumAll(sum) % 11;
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
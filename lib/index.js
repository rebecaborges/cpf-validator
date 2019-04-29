function cpfValidator(number) {
  const arraySum = [];
  const cpf = number.toString();

  multiplyArray(cpf, arraySum)

  return restIsGreaterThanTwo(arraySum)

}

function divideCpfInArray(cpf) {
  return cpf.slice(0, 9).split("")
}

function multiplyArray(cpf, arraySum) {
  divideCpfInArray(cpf).map((num, index) => {
    return arraySum.push((index - 10) * num * -1);
  })
}

function sumAll(arraySum) {
  return arraySum.reduce((acc, cur) => acc + cur);
}

function moduleSumAll(arraySum){
  return sumAll(arraySum) % 11;
}

function restIsGreaterThanTwo(arraySum){
  if(moduleSumAll(arraySum) >= 2){
   return 11 -moduleSumAll(arraySum);
  }else if(moduleSumAll(arraySum) <2){
    return 0;
  }
}

// cpfValidator(40756634857)
module.exports.cpfValidator = cpfValidator;
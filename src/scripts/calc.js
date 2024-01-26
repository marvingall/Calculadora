let input = document.getElementById('inputCalc');
let result = document.getElementById('resultCalc');

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const resultCalc = eval(input.value);

    result.innerText = resultCalc;

    const historicItem = {
      calc: input.value,
      result: resultCalc
    }

    const previousvaleus = JSON.parse(window.localStorage.getItem('historic')) || []


    previousvaleus.push(historicItem)

    window.localStorage.setItem("historic", JSON.stringify(previousvaleus))
  }
})
// fazer o NaN onde se colocar uma letra no "inputCalc" return uma alert que a area suporta somente numeros
// if !(abcdefghijklmnopqtursvwwxzy) in inputCalc return  NaN
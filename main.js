// function addNumbers(number){
//     var arr = [];

//     for(let i = 0; i < number.lenght; i++){
//         var normNumbers = Math.abs(Math.round(number[i]));
//         arr.push(normNumbers);

//         return arr;
//     }

//     var number = [3.02, -3.65, 5, -9];
//     var normNumbers = addNumbers(number);

//     console.log(normNumbers);
// }


function normNumbers(numbers) {
    var normArray = [];
  
    for (let i = 0; i < numbers.length; i++) {
      var normalizedNumber = Math.abs(Math.round(numbers[i]));
      normArray.push(normalizedNumber);
    }
  
    return normArray;
  }
  
  var numbers = [3.02, -3.65, 5, -9];
  var normalizedNumbers = normNumbers(numbers);
  console.log(normalizedNumbers);

// let numOfArr = [3.02, -3.65, 5.9, -9];

// function numberNormalize(arr) {
//     let result = [];

//     for(let i = 0; i < arr.lenght; i++) {
//         if (arr[i] < 0) {
//             arr[i] = arr[i] * -1;
//         }

//         result.push(Math.round(arr[i]));


//     }

//     return result;
// }

// console.log(numberNormalize(numOfArr))
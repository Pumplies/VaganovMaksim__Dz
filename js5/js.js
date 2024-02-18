// function compareNumbers() { 
//     let num1 = parseFloat(prompt("Введите первое число:"));
//     let num2 = parseFloat(prompt("Введите второе число:"));

//     if (num1 < num2) {
//         return -1;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// let comparisonResult = compareNumbers();
// console.log("Результат сравнения:", comparisonResult);

// let num = +prompt('число') 
// function factorial(x) {
//     if (x === 0) {
//       return 1;
//    }
//     return x * factorial(x-1);

//   }
//  console.log(factorial(num)); 


// let num1 = prompt('1') 

// let num2 = prompt('2')

// let num3 = prompt('3')

// function chislo(x1) {
//    return x1
// }

// console.log(chislo((num1 + num2 + num3)))


// let longUser = +prompt('Введите длину') 
// let widthUser = +prompt('Введите ширину')

// function calc() {
//     if (longUser && widthUser) {
//         return longUser * widthUser
//     }
//     else if (widthUser) {
//         return widthUser * widthUser
//     }
//     else if (longUser) {
//         return longUser * longUser
//     }


// }

// console.log(calc())




// function isPerfectNumber() { 
//     let number = parseInt(prompt("Введите число:"));

//     if (isNaN(number) || number <= 0) {
//         return "Ошибка: Пожалуйста, введите положительное число.";
//     }

//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }


// let inputNumber = isPerfectNumber();

// if (inputNumber) {
//     console.log("Введенное число является совершенным.");
// } else {
//     console.log("Введенное число не является совершенным.");
// }


// function isPerfectNumber(number) { 
//     if (number <= 0) { 
//         return false;
//     }

//     let sum = 0;
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }

// function perfectNumbersInRange(min, max) {
//     let perfectNumbers = [];

//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             perfectNumbers.push(i);
//         }
//     }

//     return perfectNumbers;
// }


// const minRange = parseInt(prompt("Введите минимальное значение диапазона:"));
// const maxRange = parseInt(prompt("Введите максимальное значение диапазона:"));

// if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
//     console.log("Ошибка: некорректные значения диапазона.");
// } else {
//     const perfectNumbers = perfectNumbersInRange(minRange, maxRange);
//     if (perfectNumbers.length === 0) {
//         console.log("В указанном диапазоне нет совершенных чисел.");
//     } else {
//         console.log("Совершенные числа в диапазоне [" + minRange + ", " + maxRange + "]:", perfectNumbers);
//     }
// }



// let hours = prompt('Введите часы') 
// let minuts = prompt('Введите минуты')
// let seconds = prompt('Введите секунды')

// function time(x) {
//     return x
// }
// console.log(time(`Наше время ${hours}:${minuts}:${seconds}`))






// function seconds (h,m,s) {
// return (h * 3600) + (m * 60) + s
// }
// alert(seconds(+prompt('часы'),+prompt('минуты'),+prompt('секунды')))



// let x = +prompt('Введите секунды') 

// function calcTime() {
//     let y = Math.floor(x / 60 / 60)

//     let z = Math.floor(x / 60) - (y * 60)

//     let h = x % 60

//     let result = y + ':' + z + ':' + h;
// }

// result = [
//     y.toString().padStart(2, '0'),
//     z.toString().padStart(2, '0'),
//     h.toString().padStart(2, '0')
// ].join(':');

// hours1 = +prompt('часы 1');
// minuts1 = +prompt('минуты 1');
// seconds1 = +prompt('секунды 1');

// hours2 = +prompt('часы 2');
// minuts2 = +prompt('минуты 2');
// seconds2 = +prompt('секунды 2');



// let hr = 0
// let mr = 0
// let sr = 0

// function seconds(h1, m1, s1, h2, m2, s2) {



//     let chislo = 0
//     let result = 0
//     let r1 = (h1 * 3600) + (m1 * 60) + s1
//     let r2 = (h2 * 3600) + (m2 * 60) + s2
//     if (r1 > r2) {
//         result = r1 - r2

//     }
//     else {
//         result = r2 - r1

//     }
//     hr = Math.floor(result / 3600)
//     chislo = Math.floor(result - hr * 3600)
//     mr = Math.floor(chislo / 60)
//     sr = Math.floor(chislo - mr * 60)
//     return hr
//     return mr
//     return sr
    

// }
// seconds(hours1, minuts1, seconds1, hours2, minuts2, seconds2)
// alert(`Разница: ${hr}:${mr}:${sr}`)
/* Homework №8 */

//Task №1

let spaceNums = '';

for (let i = 20; i <= 30; i += 0.5) {
   spaceNums += i + ' ';
}

let checkSpace = spaceNums.trim();
console.log(checkSpace);

// Task №2

let dollarCur = 1;
let uahCur = dollarCur * 40;

for(let i = 10; i <= 100; i += 10) {
   console.log(`${i} доларів - це ${i*uahCur} гривнів.`);
}

//Task №3

//try generators :3
const generateSqrt = function*(n) {
   const compareSqrt = Math.min(100, Math.sqrt(n));
   for(let i = 1; i < compareSqrt; i++){
      yield i;
   }
}

let N = prompt(`Task №3
   Введіть ціле число від 1 до 100:`);

for (let j of generateSqrt(N)) {
   console.log(j);
}

//Task №4

let anyNum = prompt("Введіть любе ціле число від 2-х:");

for (let i = 2; i <= anyNum; i++) {
   if (anyNum % i === 0) {
      if (i !== Number(anyNum)) {
         console.log("Це не просте число");
         break;
      } else {
         console.log("Це просте число");
      }
   }
}

//Task №5

let giveNum = Number(prompt(`Task №5
   Дано число.
      Визначити, чи можна одержати це число шляхом зведення числа 3 деякий ступінь.

Введіть любе ціле число:`));

while (giveNum % 3 === 0) {
   giveNum /= 3;
}

console.log((giveNum === 1) ? "Ми можемо одержати це число шляхом зведення числа 3" : "Ми Не можемо одержати це число шляхом зведення числа 3");
"use strick";
// Задача №1----------------------------------------------------------------------/

// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   }
//   return n + sumTo(n - 1);
// }
// console.log(sumTo(100));

// Задача №2----------------------------------------------------------------------/

function findShort(str) {
  // let sortStr = str.split(" ").sort((a, b) => a.length - b.length);
  // return sortStr[0];
  let sortStr = str.split(" ").sort((a, b) => a.length - b.length);
  return sortStr[0];
}

console.log(
  findShort(
    "Плакаты Розыск информируют жителей города Эмпайр-Бэй о преступниках"
  )
);

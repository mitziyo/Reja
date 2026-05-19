function findLongestWord(str) {
  const spred_word = str.split(" ");
  let wordSave = "";
  for (let i = 0; i < spred_word.length; i++) {
    const currentWord = spred_word[i];
    if (currentWord.length > wordSave.length) wordSave = currentWord;
  }
  return wordSave;
}

// String ichidagi eng uzun so'zni qaytarsin.

const result = findLongestWord("I came from Uzbekistan!");
console.log(result)
// Task i

// function getMajority(arr) {
//   let counter = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (counter[arr[i]]) {
//       counter[arr[i]] = counter[arr[i]] + 1;
//     } else {
//       counter[arr[i]] = 1;
//     }
//   }
//   let max = 0;
//   let result = null;

//   for (let key in counter) {
//     if (counter[key] > max) {
//       max = counter[key];
//       result = Number(key);
//     }
//   }
//   return result;
// }

// console.log(getMajority([1, 2, 3, 4, 5, 4, 3, 4]));

// Task H

// function getPositive(numbers) {
//   const befilter = numbers.filter((num) => num > 0);
//   const bemap = befilter.map((num) => String(num));
//   const result = bemap.join("");

//   return result;

// }
// const result = getReverse("hello")
// console.log("result:", result)

// console.log(getPositive([1, -4, 2, 3]));

// function tekshir(num) {
//     if (num > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// numbers.filter(tekshir);

// console.log(********************************************)

// Task G

// function getHighestIndex(arr) {
//   let maxValue = arr[0];
//   let maxIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// task F
// function findDoublers(matn) {
//   if (typeof matn === "string") {
//     for (let i = 0; i < matn.length; i++) {
//      // console.log(matn[i]);
//       for (let j = 0; j < matn.length; j++) {
//         if (matn[i] === matn[j] && i !== j) {
//           return true;
//         }
//       }
//     }

// TASK D

// function checkContent(a, b) {
//   if (a.length === b.length) {
//     const aQiymat = a.split("");
//     const bQiymat = b.split("");

//     const aArray = aQiymat.sort();
//     const bArray = bQiymat.sort();

//     return aArray.join("") === bArray.join("");
//   } else {
//     console.log("Hariflar soni togri emas")
//     return false;
//   }
// }

// const result = checkContent("abbos", "abbos");
// console.log(result);

// //   TASK-C
// const moment = require("moment")
// const time = moment().format("HH:MM")
// class Shop {

//     constructor(a, b, c) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }

//     qoldiq() {
//         console.log(`Hozir ${time}da ${this.a}ta non, ${this.b}ta lagmon va ${this.c}ta cola mavjud`)
//     }

//     sotish(amount) {
//         this.a -= amount
//         console.log(`${amount} non sotildi`)
//     }

//     qabul(amount) {
//         this.c += amount
//         console.log(`${amount} cola qabul qlindi`)
//     }
// }

// const shop = new Shop(4, 5, 2)

// shop.qoldiq()
// shop.qabul(4)
// shop.sotish(2)
// shop.qoldiq()

// Task B
// let count = 0;
// function countDigits(word) {
// for(let i = 0; i <= word.length; i++) {
//     if(0 <= word[i] && word[i] <= "9") {
//         count++
//     }
// }
// return count;
// }

// console.log(countDigits("22222s2d2s2sd2sd2s2ds2d"))

// // MiT Task A
// let count = 0;
// function number(word, letter){
// for(let i = 0; i <= word.length; i++ ) {
//     if(word[i] === letter) {
//         count++
//     }
// }
// return count;
// }
// console.log(number("engineer", "e"));

// console.log("Jack Ma Maslahatlari!");
// const list = [
//   "Yaxshi talaba bo'liing", // 0~20:
//   "tog'ri boshliq tanlang va koproq xato qiling", // 20~30:
//   "uzingizni ishlaringizni boshlang", // 30~40:
//   "siz kuchli bo'lgan narsalarni qiling", // 40~50:
//   "yoshlarga tafsiya bering", // 50~60":
//   "endi dam oling , foydasi yoq endi", // 60~
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 40) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("jaob:", data)
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");

// Video 22

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 40) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//     return new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve( list[5]);
//     }, 5000);
//     });

//   };
// };

//  then/ catch
// console.log("passed here 0");
// maslahatBering(40)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// aync/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(42);
//     console.log(javob);
// }
// run();

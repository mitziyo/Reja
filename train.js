// MiT Task A
let count = 0;
function number(word, letter){
for(let i = 0; i <= word.length; i++ ) {
    if(word[i] === letter) {
        count++
    }
}
return count;
}
console.log(number("engineer", "e"));







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
// //   console.log("jaob:", data)
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

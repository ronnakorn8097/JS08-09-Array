// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// const newArr = array.map(item=>item*2);
// console.log(newArr);

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// const newArr = array.map(item => item.toString());
// console.log(newArr);


// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// const newArr = array.map(item => typeof(item));
// console.log(newArr);
 
// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const newArr = array.map(item=> item.toUpperCase());
// console.log(newArr);

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const newArr = array.map(item => {
//     if(item%2==0)
//     {
//         return 'even';
//     }
//     else return 'odd';
// });
// console.log(newArr);

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// const newArr = array.map(item => Math.abs(item)); // เอา value ใน array ไป abs
// console.log(newArr)

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// const newArr = array.map(item => item.toFixed(2)); // ทศนิยม 2 ตำแหน่ง
// console.log(newArr);

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const month = {0:"Jan",
// 1: "Feb",
// 2: "Mar",
// 3: "Apr",
// 4: "May",
// 5: "Jun",
// 6: "Jul",
// 7:"Aug",
// 8: "Sep",
// 9: "Oct",
// 10: "Nov",
// 11: "Dec"}
// const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
// const newArray = array.map(item => month[item])
// const newArr = array.map(item=> month[item]);
// console.log(newArr);

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// // 1=> 1
// // 16 => 2(2^4 == 16)
// // 81 =>3 (3^4==81)
// const newArr = array.map(n => Math.sqrt(Math.sqrt(n)) );
// console.log(newArr);

// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
//   ];
//   // result: ["apple", "banana", "watermelon"]
// const newArr = array.map(function(fruitObj)
// {
//     return fruitObj.name;
// });
// console.log(newArr);

// const array = [
//     { name: 'apple', age: 14 },
//     { name: 'banana', age: 18 },
//     { name: 'watermelon', age: 32 }
//   ];
//   // result: [14, 18, 32]

//   const newArr = array.map(ages => ages.age);
//   console.log(newArr);


// const array = [
//     { name: 'apple', birth: '2000-01-01' },
//     { name: 'banana', birth: '1990-10-01' },
//     { name: 'watermelon', birth: '1985-12-01' }
//   ];
//   // result: [
//   //   { name: "apple", birth: "2000-01-01", age: 21 },
//   //   { name: "banana", birth: "1990-10-01", age: 31 },
//   //   { name: "watermelon", birth: "1985-12-01", age: 36 },
//   // 
// const newArr = array.map(function(fruitObj)
// {
//     // Create NewFruit Object
//     const newFruitObj = Object.assign({},fruitObj);
//     const birthYear = fruitObj.birth.slice(0,4);
//     newFruitObj.age = 2021 - birthYear;
//     // console.log(newFruitObj);
//     return newFruitObj; // ถ้าไม่ return undefined
// });
// console.log(newArr);


const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
  ];
  // result: [
  //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
  //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
  //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
  // ]

// INPUT (JS-OBJ) => { name: "apple", birth: "2000-01-01" }
// OUTPUT (STRING HTML TAG) => <tr><td>apple</td><td>01 jan 2000</td></tr>

////////////////////////////

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const newArray = array.map(function (obj) {
  let name = obj.name;
  // retrieve value from each obj
  const day = obj.birth.slice(-2);
  const monthIndex = obj.birth.slice(-5, -3) - 1; // เลื่อน index
  const year = obj.birth.slice(0, 4);
  // create string
  const resultString = `<tr><td>${name}</td><td>${day} ${MONTHS[monthIndex].toLowerCase()} ${year}</td></tr>`;
  return resultString;
});
console.log(newArray);


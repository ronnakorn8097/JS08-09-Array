// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array


let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];


function getAverageAge(arr)
{
   let newArr = arr.reduce((acc,item) => acc+item.age,0);
   return +(newArr/arr.length).toFixed(2);
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
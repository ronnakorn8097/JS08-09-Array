// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter


// 1.
// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// const newArr = array.filter(item => item > 10);
// console.log(newArr);

//2.
// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่
// const newArr = array.filter(item => item %2 !== 0);
// console.log(newArr);

//3
// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// const newArr = array.filter(item=> typeof item === "number");
// console.log(newArr);

//4
// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const newArr = array.filter(item => item.length > 6);
// console.log(newArr);

//5
// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// const newArr = array.filter(item => item > 0 );
// console.log(newArr);

//6
// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// const newArr = array.filter(item => item % 3 == 0)
// console.log(newArr);

//7
// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// const newArr = array.filter(item => item.charAt(0)=='E')
// console.log(newArr);

//8
// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const newArr = array.filter(item => item == item.toUpperCase())
// console.log(newArr);
    
//9
// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

// const newArr = array.filter(item => item === item.includes("buri",0));
// console.log(newArr);

// const array = [
//     { name: 'Ben', age: 14 },
//     { name: 'Phil', age: 18 },
//     { name: 'John', age: 32 },
//     { name: 'Ann', age: 16 },
//     { name: 'Paul', age: 24 }
//   ];
//   // อายุไม่น้อยกว่า 18 

// const array = [
//     { id: 1, name: 'Pepsi' },
//     { id: 2, name: 'Mirinda' },
//     { id: 3, name: 'Coke' },
//     { id: 4, name: 'Fanta' },
//     { id: 5, name: 'Sprite' }
//   ];
//   // id ไม่เท่ากับ 4
//   const newArr = array.filter(obj => obj.id !== 4)
//   console.log(newArr);

// const array = [
//     { name: 'John', birth: '2001-07-31' },
//     { name: 'Jack', birth: '1990-06-24' },
//     { name: 'Jim', birth: '1984-12-13' },
//     { name: 'Jeff', birth: '1996-02-05' },
//     { name: 'Joe', birth: '2002-06-13' }
//   ];
//   // เกิดเดือน 6

//   function filterFn(personObj,index,array)
//   {
//     const month = +personObj.birth.slice(5,7);
//     if(month === 6) return true;
//     else return false;
//   }

//   const filterLists = array.filter(filterFn);
//   console.log(filterLists);


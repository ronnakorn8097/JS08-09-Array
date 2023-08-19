// จงหา element ตัวแรก ใน nums ที่มีค่าน้อยกว่า 0


const nums = [7, 9, -5, -1, 0, 3];
const newNums = nums.find(num => num < 0);

console.log(newNums);
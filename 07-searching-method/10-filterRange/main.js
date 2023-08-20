// จงเขียนฟังก์ชัน filterRange(arr, a, b) 
// เพื่อ return array ที่ประกอบด้วย element ของ arr 
// ที่มีค่าอยู่ระหว่าง a กับ b

let newArr;
const numbers = [1,2,3,4,5,6,7,8,9,10];
function filterRange(arr,a,b)
{
    newArr = arr.filter(num => num >= a && num <= b);
    return newArr;
   
}
filterRange(numbers,3,7);
console.log(newArr);

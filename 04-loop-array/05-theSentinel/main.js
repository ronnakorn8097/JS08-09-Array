// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

let input_Number;
let number = [];
let sum = 0;

do{
    input_Number = prompt("Enter Your Number");
    if(input_Number === null || input_Number === '')
    {
        break;
    }
    else
    {
        number.push(input_Number);
    }
    

}while(true)
let nums = number.forEach(num=> {sum=sum+(num*1)}); //*1 เพื่อแปลงจาก string เป็น number
console.log(number);
console.log(sum);
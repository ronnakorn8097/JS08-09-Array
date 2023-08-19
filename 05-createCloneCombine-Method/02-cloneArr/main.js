// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

const arr = [1,2,3,4,5];
let newArr =[];

function clone(arr)
{
    // newArr = arr.slice();
    // return newArr;
    //or below
    return arr.slice();;
}
console.log(clone(arr)); // one time 
console.log(newArr); // []

/////// or //////////
const a = clone([1,2,4,5,6]);
console.log(a);



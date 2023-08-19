// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์


const arr = [2, 3, 5, 7, 11];
squareArr(arr); // [4, 9, 25, 49, 121]

function squareArr(array)
{
    const newArr = []; //สร้าง array เปล่าไว้

    for(let i = 0; i < array.length ; i++)
    {
        newArr.push(array[i]**2); // เพิ่ม item ไปไว้ใน array เปล่า
    }
    return newArr; // ส่ง return กลับมา
}

let newArray = squareArr(arr);
console.log(newArray);
console.log(arr);

//ยอม
// forEach ก้ได้



/////////////////////////////////////////
// function squareArr(fn)
// {
//     let newArr = fn;
//     newArr.forEach((a) => console.log(a**2));
// }
///////////////////////////////////////////
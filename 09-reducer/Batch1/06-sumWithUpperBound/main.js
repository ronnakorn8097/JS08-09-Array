// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str 


let str = '31 45 12 67 34 86 23 37 19 41';

// convert to number
//แยก string โดยดูจากสิ่งที่ใส่เข้าไป

const nums = str.split(' ');
const sum = nums.reduce((acc,num)=>
{
    if(+num <40)
    {
        acc += +num;
    }
    return acc;
},0)

console.log(sum); // 156

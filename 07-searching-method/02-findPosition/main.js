// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets


const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

const resultArr = [];

////////////// วิธีที่ 1
// for(let index in alphabets)
// {
//     if(alphabets[index]=== 'a') resultArr.push(+index);
// }

////////// วิธีที่ 2
alphabets.forEach((char,index)=> {
    if(char === "a") resultArr.push(+index);
})

////////// วิธีที่ 3
// alphabets.findIndex((item,index)=>
// {
//     if(item==='a')
//     {
//         resultArr.push(index);
//         return true;
//     }
// })
console.log(resultArr);

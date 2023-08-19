// จงหาผลรวมของ element ใน array โดยใช้ forEach

let sum=0;
const array = [29, 17, 13, 47, 23, 31];

array.forEach(a=>sum=sum+a);
console.log(sum);


/////// วิธีพี่วี for loop /////
// for(let i =0 ; i < array.length ; i++)
// {
//     // console.log(i,array[i]);
//     sum +=array[i];
// }
// console.log(sum);

/////////
for(let index in array)
{
    sum+= index  
}



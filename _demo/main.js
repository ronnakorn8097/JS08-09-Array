const log = console.log;
log('Learn Array');

////// ###### const ##########
// const = constant (mutable) ? เปลี่ยนแปลงค่าได้หรือไม่
// constant = can not reassign
// canstant = same address
// ไม่ได้ reassign address ใหม่ให้

const uncleHome = ['Bicycle','']



// ######## Array Declaration #########
// Array Literal
// Element : สมาชิก // Index เริ่มต้นที่ 0 
const friends = ['Money','Non','Peakpoon','Fon'];
log(friends);

// Array Constructor
const height = new Array(150,160,175);
log(height);

//###### Access , Modify,Add,Delete ######
// Bracket Notation with Index การเข้าถึงสมาชิก array

// Access
log(friends[0]); // money
log(friends[2]); // Peakpoon
log(friends[-1]); // ใส่ index ที่ไม่มีอยู่ค่าที่ออกมา คือ undefined
log(friends[-10]); // ใส่ index ที่ไม่มีอยู่ค่าที่ออกมา คือ undefined

//Update
friends[0] = 'Gold';
log(friends); // ['Gold','Non','Peakpoon','Fon'];

friends[1] = 'Micheal';
log(friends); // 

//ถ้าพยายามอัพเดทในที่ไม่มีอยู่จริง มันจะถือว่าเป็นการ add
// friends[-1] = 'Pravit';
// log(friends);// ['Gold', 'Micheal', 'Peakpoon', 'Fon']
// log(friends[-1]); // Pravit
// ไม่ควรทำด้านบน

// ADD ระบุ INDEX ลงไปใน Bracket []
log(friends[4]);
friends[4] = "Git";
log(friends); //['Gold', 'Micheal', 'Peakpoon', 'Fon', 'Git']

// Delete ระบุ Index ลงที่ใน Bracket []
delete friends[2];
log(friends);//['Gold', 'Micheal', empty, 'Fon', 'Git']
log(friends[2]); // Undefined

// ##### 3. Basic Property and method

//<arr>.lenght คือค่าความยางของ array
log(friends.length); 

//Hard Code
// friends[5] = 'Mix';
friends[6] = 'Mix'; // 7
log(friends);//['Gold', 'Micheal', empty, 'Fon', 'Git', empty, 'Mix']

friends[friends.length] = 'Mix'; // .length มันจะไปต่อ index ตัวสุดท้าย
log(friends); //['Gold', 'Micheal', empty, 'Fon', 'Git', empty, 'Mix', 'Mix']
log(friends.length); // 8

//////// #### Array For Loop

for(i=0; i<friends.length ; i++)
{       //0,1,2,3,4,5(frined =6) ที่ต้องใส่ -1 เพราะ Index array นับที่ 0 
        // ถ้าไม่ใส่ -1 ที่ condition ก็ใช้เครื่องหมาย < 
    console.log(i,friends[i]);
}


// Method CRUD ทีละตัว หรือ หลายตัวใน element

const animals = ['Spider','Cat','Elephant'];

//push รับ parameter ได้ไม่จำกัด
//Inmutable : ไม่เปลี่ยนแปลงค่า
// Mutable : เปลี่ยนแปลงค่าได้

// การ push ทำให้ Array Mutable (เปลี่ยนแปลงค่า) array ยาวขึ้น
// Method return อะไรกลับมา / return ความยาว length กลับมา
let r = animals.push('Dog'); // เพิ่ม straing "Dog" เข้าไปในลำดับสุดท้าย
log(animals); //['Spider', 'Cat', 'Elephant', 'Dog']
log(r); //4 เลขความยาวล่าสุด

// การ Unshift การแอด string เข้าไปด้านหน้า
let s = animals.unshift('Snake','Mountain Bird');
log(animals); // ['Snake', 'Mountain Bird', 'Spider', 'Cat', 'Elephant', 'Dog']
log(s); // 6

//pop เด้งออกจากหลังสุด // return ของที่หายไป มาให้เรา เพื่อเอาไปใช้อะไรต่อ
// let t = animals.pop();
// log(t); // Dog

// // shifht ลบ element ด้านหน้า
// let y = animals.shift();
// log(y);// Snake


////////######### 4.Loop ######/////////////////////

//ตัวที่ 1 .for loop 
// Imperative รู้ได้ไงว่า มัน imprative
// กำหนด i เอง
// for(let i =0 ; i< animals.length ;i++)
// {
//     console.log(animals[i]);
// }

// for in (มอง array เป็น object ประเภทหนึ่ง)
/**
 * <key>:<value> => <index>:<value>
    consst arr = {
        0 : 'Bird',
        1 : 'Cat',
        2 : 'Dog',
    }
 */

// ตัวที่ 2 for in
// วิธีนี้ ไม่ต้องกำหนด i เอง ข้อผิดพลาดจะน้อยกว่า
    // for (let index in animals)
    // { console.log(index,animals[index]);    }


// ตัวที่ 3 for off
for(let element of animals)
{
    // 1st = element = "Snake"
    // 2st = element = ""
    // 3st = element = ""
    // 4st = element = ""
    // 5st = element = ""
    console.log(element);
}

// Aside Topic : Higher Order Function
function add(x,y)
{
    return x+y;
}
log(add(5,6)); // 11

// Function expression : Fn as a vlaue
// const a = console.log;
// const b = alert;
// a('hi'); // console.log('hi);
// b('hello'); // alert('hello');


// สร้าง function รับ parameter เป็น function

////////////////////////////////////////////

// Main Fn : Hight Order Function (function รับ function เป็น parameter)
// fn1,fn2,fn3 เรียกว่า call back

// fn1,fn2,fn3 จะถูก run ก็ต่อเมื่อ cook รันเท่านั้น
// function cook(fn1,fn2,fn3){
//     fn1();
//     fn2();
//     fn3();
//     }
    
//     function step1(){
//         log('1.Prepare Ingredient');
//     }
//     function step2(){
//         log('2.Cooking');
//     }
//     function step3()
//     {log('3.serve');}
    
//     // call function
//     cook(step1,step2,step3);
/////////////////////////////////////////////////
    ///// อีก ตัวอย่าง
function addAndShow(x,y,showFn) 
{
    let result = x+y;
    // call ShowFn
    showFn(`Result is : ${result}`);
    return result;
    };
////////////// เรียกแบบนี้ หรือแบบด้านล่างก้ได้ /////////////////////
    addAndShow(5,10,console.log); // Result is : 15
    // x = 5 , y=10 , ShowFn = console.log
    // fn == console.log
    // fn(`Result is : ${result}`) == console.log(`Result is : ${result}`);
    addAndShow(5,20,alert); // alert(`Result is : 25`)
    
//////////////// อีกวิธี////////////////////////
//   function show (result)
//   {
//     console.log(result);
//   }  
//   addAndShow(5,10,show);
//////////////////////////////////////////////

///////////// ตัวที่ 4 forEach ใช้ได้เฉพาะ array
// สิ่งที่ใส่ให้ for each จะต้องเป็น function
const items = ['Football','Bag','Dish'];
// forEach
// Syntax : <array>.forEach(Fn)
//array คือ caller เฉยๆ
// Higher Order Function == forEach(รับ parameter เป็น function)

// items.forEach(..funtion () {} )
//call back จะถูกเรียกใช้ตาม จำนวนสมาชิกใน array

// items.forEach(function () 
// {
//     console.log(`Hi`);
// });
// const myFunc = function()
// {
//     console.log(`Hi`);
// }

// function iterateFn(a)
// // {
// //     console.log(a); // ค่าสมาชิก แต่ละตัวใน array
// // }

// const iterateFn = (item) => console.log(item);
// const iterateFn = (element) => console.log(element);
// const iterateFn = (a,b,c) =>console.log(a,b,c);

const iterateFn = (index,item,array) => console.log(index,item);


items.forEach(iterateFn);
//1st Loop : ("Footbal",o,items) =>console.log("Football");
//2st Loop : ("Bag",1,items) =>console.log("Bag");
//3st Loop : ("Dish",2,items) =>console.log("Dish");

items.forEach((a,b,c) => {
    console.log(`At index ${b} ,element ${a}`);
});

/// ทบทวน 

[1,2,3,4,5].forEach(a => console.log(a)); // 1,2,3,4,5 // โยน array
[1,2,3,4,5].forEach((a,b) => console.log(a,b)); // โยน array + index
//1 0
//2 1
//3 2
//4 3
//5 4
[1,2,3,4,5].forEach((a,b,c) => console.log(a,b,c)); // โยนทั้ง array
// 1 0 (5) [1, 2, 3, 4, 5]
// 2 1 (5) [1, 2, 3, 4, 5]
// 3 2 (5) [1, 2, 3, 4, 5]
// 4 3 (5) [1, 2, 3, 4, 5]
// 5 4 (5) [1, 2, 3, 4, 5]

let sum = 0;
[1,2,3,4,5].forEach((a)=>sum=sum+a)
{
    //1st : (1)=>sum = 0+1 =sum =1
    //2st : (2)=>sum = 2+1 =sum =3
    //3st : (3)=>sum = 3+3 =sum =6
    //4st : (4)=>sum = 6+4 =sum =10
    //5st : (5)=>sum = 10+5 =sum =15
}

// ######### Array Method 

 // .concat เอา array ใหม่มาต่อ array ต้นฉบับ

//slice
// arr.slice([start],[end]);

[0,1,2,3,4,5].slice(0,3); // ปลาย - ต้น = index ทั้งหมดที่จะเอา

const arr = [0,1,2,3,4,5];
const newArr = arr.slice(1,3); // ถ้า 0 คือเอาหมด

console.log(arr);
console.log(newArr);


///////////////////////////////////
// splice ลบบางส่วนหรือเพิ่ม ใน index

// .map
// <array> . map(callBack)















// จงหา unique array element ของ alphabets 


let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

const result = alphabets.reduce((acc,char)=> {
    
    // acc.push(char);
    // ถ้ามี charactor ตัวนั้นอยู่ใน acc แล้วไม่ต้อง push
    // ถ้าไม่มี charactor นั้นอยู่ใน acc ให้ push
    let found = false;
    for(let c of acc)
    {
        if( c == char) found = true;
        if(!found) acc.push(char);
    }
    return acc;

},[])
console.log(result);


// วิธีแบบ set
// const set = new Set(alphabets);
// console.log(set);
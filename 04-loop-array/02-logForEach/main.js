// ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง


const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill

//callback : literal , on the fle
names.forEach((item,index)=>console.log(`${index+1}. ${item}`));

///////////////////////////////////////////
//////// พี่วี solution/////////////
function logPerson(person,order)
{
    console.log(order+1,person);
}

//callback : Name.Reference
names.forEach(logPerson);





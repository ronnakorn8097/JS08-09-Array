// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
// - execute deleteTask(1)


const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

function deleteTask(id)
{
    const deleteID = tasks.findIndex(obj => obj.id === id);
    if(deleteID !== -1) // array นับจาก index 0 // find index ถ้าไม่เจอ return -1
    {
        tasks.splice(deleteID,1);
    }
};

deleteTask(2);
console.log(tasks);
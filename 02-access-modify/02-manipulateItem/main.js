// ให้ทำตามขั้นตอนดังนี้
// - สร้างตัวแปร Array ชื่อ styles และให้มี element คือ Jazz และ Blues ตามลำดับ
// - เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
// - แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
// - ลบ element ตัวแรก โดยใช้คำสั่ง delete
// - จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด

const style = ['Jazz','Blues'];

style[style.length] = 'Rock-n-Roll';
console.log(style); // ['Jazz', 'Blues', 'Rock-n-Roll']


style[1] = 'Classic';
console.log(style);//['Jazz', 'Classic', 'Rock-n-Roll']


delete style[0];
console.log(style);//[empty, 'Classic', 'Rock-n-Roll']

console.log(style.length); // 3
// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // * 1
console.log(beasts.indexOf('bison', 2)); // ** 4  // เริ่มหาตั้งแต่ Index 2
console.log(beasts.indexOf('giraffe')); // *** -1
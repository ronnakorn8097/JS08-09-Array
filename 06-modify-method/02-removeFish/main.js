// ให้เขียนโค้ดเพื่อ remove element ในตัวแปร fish ออกให้หมด


let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];

let r = fish.splice(0,fish.length);
console.log(r); // ['angel', 'clown', 'mandarin', 'sturgeon']
console.log(fish); // []
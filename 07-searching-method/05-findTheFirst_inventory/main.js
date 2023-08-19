// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries



const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];

const newInventory = inventory.find(inv => inv.name === "cherries");
console.log(newInventory);
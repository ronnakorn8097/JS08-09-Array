// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

// ผลลัพธ์
// const summary = [
//     { netPrice: 900 }, 
//     { netPrice: 475 },
//     { netPrice: 100 }
//   ];

const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];
  // sales = [obj1 ,obj2,obj3,...]
  // เก็บแบบ array แต่เป็นชนิด object

//   //Walkthrough Array (loop) เข้าถึง array ให้ได้ทุกตัว
///////////////วิธีที่ 1/////////////////////////
//   for(let productObj of sales)
//   {
//     // console.log(productObj);
//     let price = productObj.price;
//     let discount = productObj.discount;
//     let netPrice = price;
//     if(discount)
//     {
//         netPrice = price * (1-discount);
//     }
//     // create new array and object
//     const newObj = {netPrice  : netPrice};
//     console.log(newObj);
//   }

  /////////////////////////////////////////////////
  const newArr= [];
//วิธีที่ 2
//   sales.forEach((obj)=> {
//     let netPrice = obj.price * (1-(obj.discount || 0))
//     newArr.push({netPrice});
//   });


// วิธีที่ 3
// sales = [{price:____,discount:______},{},{}]
  sales.forEach((obj)=>newArr.push({newPrice:obj.price *(1-(obj.discount || 0))})); // add key . value
  console.log(sales);
  console.log(newArr);
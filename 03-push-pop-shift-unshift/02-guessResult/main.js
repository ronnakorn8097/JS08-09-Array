let arr = ["a", "b"];

arr.push(function() { // push function เข้าใน array 
  alert(this);
}) 

// arr = ["a", "b",function(){alert(this)}];

arr[0]; // *  a
arr[1]; // *  b
arr[2](); // * call function


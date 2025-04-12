

console.log("--fibonaci---");

let number = 10;
let x1 = 0, x2 =1 , nextX;

for(let i = 0 ; i < number ;i++){
  console.log(x1)
  nextX = x1 + x2;
  x1 = x2;
  x2 = nextX;
}

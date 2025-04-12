function isFibonacci(n) {
    let prev = 0;
    let curr = 1;
  
    // Loop sampai curr melebihi atau sama dengan n
    while (curr < n) {
      // Menyimpan nilai curr dalam variabel temp
      const temp = curr;
  
      // Menambahkan nilai curr dengan prev
      curr = prev + curr;
  
      // Memperbarui nilai prev dengan nilai temp
      prev = temp;
    }
  
    // Jika curr sama dengan n, maka n adalah bilangan Fibonacci
    return curr === n;
  }

  console.log(isFibonacci(3)); // true
console.log(isFibonacci(5)); // true
console.log(isFibonacci(8)); // true
console.log(isFibonacci(13)); // true
console.log(isFibonacci(10)); // false
console.log(isFibonacci(20)); // false
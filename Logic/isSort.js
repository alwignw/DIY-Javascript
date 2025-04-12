

const array = [9,2,3,4,5]

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 !== array[i + 1]) {
        console.log(false)
      return false;
    }
  }

  console.log(true)
  return true;
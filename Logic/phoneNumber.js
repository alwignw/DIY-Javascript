function createPhoneNumbers(numbers){
    let a= 0;
    let result = ''
    for (let i of numbers){
        if(a % 3 == 0 && a != 0){
          result += a == numbers.length -1 ? `${i}` : `-${i}`
        }else{
          result += i
        }
      a++;
    }
    let final =''
    result.split('-').map((e,i)=>{
        if(i == 0) final += `(${e}) `
        else final += i === result.split('-').length - 1  ? `${e}` : `${e}-`

    })

    return final
  }

//   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

//   "(123) 456-7890"



// ----------------------------------------------------------------
// gpt version

function createPhoneNumber(numbers) {
    const firstPart = numbers.slice(0, 3).join('');

    const secondPart = numbers.slice(3, 6).join('');
   
    const thirdPart = numbers.slice(6).join('');
    console.log(thirdPart)

    return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber);



console.log("--segitiga sama kaki--")

let angka = 5
for(let i = 0 ;i < angka ; i++){
    let tmp='';
    for(let j = 0; j < angka + i; j++){

     // if(j < angka - i - 1){
     //     tmp += ` `
     // }else{
     //     if(i == 0 || i == angka -1) tmp += `${j}`
     //     else{
     //        if() tmp += ` `
     //         else tmp += `${j}`
     //     }
     //     // if(j % 2 === 1)tmp += ` `
     //     // else tmp += `${j}`
     //     // tmp += `${j}`
     // }
        if(j == angka -i -1 || j == angka + i - 1 || i == angka-1) tmp += j
        else tmp+=' '
    }
    console.info(tmp)
}
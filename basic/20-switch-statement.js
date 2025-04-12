/*
Kadang kita hanya butuh menggunakan kondisi sederhana di if statement, seperti hanya menggunakan perbandingan ==
Switch adalah statement percabangan yang sama dengan if, namun  lebih sederhana cara pembuatannya
Kondisi di switch statement hanya untuk perbandingan ===
 */

let nilai = 'A'
switch (nilai) {
    case "A":
        console.info('predikat A')
        break;
    case "B":
        console.info('predikat B');
    case "C":
        console.info('predikat C');
        break;
    case "D":
        console.info('predikat D');
        break;
    default:
        console.info('predikat jelek sekali');
        break;
}

let number = 10;

switch (number){
    case  '10':
        console.info('10');
        break;
    case 10:
        number++
        console.info(number);
}


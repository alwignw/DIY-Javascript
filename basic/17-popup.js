//Alert, Prompt dan Confirm

/*
JavaScript memiliki fitur yang bernama alert, prompt dan confirm
Alert digunakan untuk memberi peringatan berupa popup text di browser
Prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup input text
Sedangkan confirm digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan
 */

/*
The alert() function is a property of browser window objects.
It is not really part of JavaScript; it's just a facility available to JavaScript code in that environment.
 */

//alert
alert('hello word');

//propmt
const name = prompt("siapa nama anda ? ");
alert(name);

//confirm
const masuk = confirm("Anda yakin ingin masuk ? ")
if(masuk){
    const names = prompt("siapa nama anda ?")
    alert('hello' + names)
}else{
    alert('bye')
}


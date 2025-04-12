/*
Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam variable-variable
Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu
 */

//mengambil data satu persatu
const employee = ["jhon" , "fredy" , "buki"]
let employee1 = employee[0]
let employee2 = employee[1]
let employee3 = employee[2]
console.info(employee1 , employee2 , employee3)

//Kode : Destructuring Array
const developer = ["alwi" , "fatur", "yenda", "dede"]
const [dev1, dev2, dev3, ...others] = developer

console.info(dev1 , dev2 , dev3)
console.info(others)

{
    //Kode : Destructuring Object
    const playerML = {
        nama : "yayesa",
        nickname : "xinnn",
        squad : "RRQ",
        alamat :{
            prov : "sulawsi utara",
            city : "manado"
        },
        role : "core",
        herofav : ["hayabusa" , "granger" , "claude"]
    }

    const {nama , nickname , squad, alamat :{prov , city} , role , herofav} = playerML

    console.info(nama)
    console.info(nickname)
    console.info(squad)
    console.info(prov)
    console.info(city)
    console.info(role)
    console.info(herofav)

}

{
    //Destructuring Function Parameter
    //Destructuring tidak hanya bisa dilakukan di variable, tapi juga bisa dilakukan di function parameter
    // Hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalam function

    //object
    function  displayPlayer({nama , nickname , squad}){
        console.info(nama , nickname , squad)
    }

    const playerML = {
        nama : "yayesa",
        nickname : "xinnn",
        squad : "RRQ",
        alamat :{
            prov : "sulawsi utara",
            city : "manado"
        },
        role : "core",
        herofav : ["hayabusa" , "granger" , "claude"]
    }
    displayPlayer(playerML)
}

{
    //array function
    function  sum ([first, second]){
        return first + second
    }
     console.info(sum([1, 3]))
}

{
    //default value
    /*
    Yang paling menarik di destructuring adalah, kita bisa menambahkan default value
    Jadi misal kita kita melakukan destructuring terhadap array, ternyata tidak ada datanya, maka kita bisa menambahkan default value
    Begitu juga pada object, jika ternyata property nya tidak ada, maka kita bisa menambahkan default value
     */
    const player =["lemon" , "tuturu" , "xin"]
    const [player1 , player2 , player3 , player4="albert"] = player
    console.info(player1 , player2 , player3 ,player4)
}

{
    //Menggunakan Nama Variable Lain
    /*
    Saat melakukan destructuring di Array, kita bisa dengan mudah membuat nama variable sesuka kita
    Namun pada saat melakukan destructuring, kita harus membuat nama variable sama dengan nama property
    Kita juga bisa menggunakan nama variable lain saat melakukan destructuring object jika kita mau
     */

    const person ={
        firtsName : "alwi",
        middleName : "gunawan",
        lastname : "dali"
    }
    const {
        firtsName : namaDepan,
        middleName : namaTengah = "gun",
        lastname : namaAkhir }= person

    console.info(namaDepan ,namaTengah ,namaAkhir  )

}

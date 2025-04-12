/*
Selain digunakan untuk memanggil constructor milih parent class, kata kunci super juga bisa digunakan untuk mengakses method parent class
Caranya bisa menggunakan super titik nama function nya
Dengan kata lain, super sebenarnya adalah reference ke parent prototype, mirip seperti __proto__

 */

class  shape{
    paint(){
        console.info("ini adalah paint")
    }
}

class  circle extends  shape{
    paint(){
        super.paint();
        console.log("ini adalah circle")
    }
}

const bentuk = new circle();
bentuk.paint();
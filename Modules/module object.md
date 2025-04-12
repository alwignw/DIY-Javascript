Ketika sebuah module berisikan banyak sekali export data, maka melakukan import satu persatu akan terlihat berantakan
Rekomendasinya ketika kita ingin mengimport module yang sangat banyak export data nya, gunakan Module Object
Module Object sederhananya adalah object JavaScript yang berisi attribute hasil yang di export pada module
Cara membuat module object bisa kita lakukan misal seperti ini :
`import * as NamaModule from “./module.js`
Selanjutnya kita bisa gunakan NamaModule sebagai object untuk module tersebut

Sampai saat ini, kita selalu melakukan export dengan nama, baik itu nama variable, function dan yang lainnya
Ada juga fitur yang bernama export default, ini adalah fitur yang digunakan untuk mempermudah untuk membuat default data di module, dan membantu JavaScript agar kompatibel dengan CommonJS dan AMD module system

----------------------------------------------------------------
how to export : 
export default namaFunction;
export default function(){ ... }
export default namaVariable;
export default namaVariable = value;
export default NamaClass;
export default class { ... }

----------------------------------------------------------------

how to import : 
import aliasFunction from “./module-default.js”
import {default as aliasVariable} from “./module-default.js”
import aliasVariable from “./module-default.js”
import {default as aliasVariable} from “./module-default.js”
import AliasClass from “./module-default.js”
import {default as AliasClass} from “./module-default.js”



----------------------------------------------------------------
Default dan Named Export
Dalam satu module, kita bisa menggabungkan export default dan export named
Yang tidak boleh adalah, dalam satu module, membuat lebih dari satu default
Cara import default dan named secara bersamaan bisa menggunakan perintah :

import defaultAlias, {named1, named2} from “./module.js”;
import {default as defaultAlias, named1, named2} from “./module.js”;


----------------------------------------------------------------
Rekomendasi
Bedakan antara default dan named, karena jika digabungkan kadang akan membingungkan ketika melakukan import
Sebisa mungkin selalu gunakan export named dibandingkan export default 

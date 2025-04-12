/*
Nullist value adalah null dan undefined
Nullist coalescing operator (??) adalah operator mirip dengan ternary operator,
yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value default nya diambil
 */

let parameter = undefined ;
let result = parameter || "google";
console.info(result)
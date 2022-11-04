const functions = require("./functions.js") ;
function cheese_board(number){
    let str = "# ";
    let str1 = " #";
    for (i=0; i<number; i+=1){
        if (i%2==0){
            console.log(str.repeat(number))
        }
        else{
            console.log(str1.repeat(number))
        } 
    }
}
// var mack = [];
// mack.push("mack");
// mack.push("hola",2);
// console.log(mack.join("/"))
// // var rabbit = {}
// console.log(mack.pop())
// console.log(mack)
console.log(functions)
let hip = functions.find_hipopotemusa(3, 4);
let angulo = functions.find_angle_sin(3, 4);
console.log("La hipotenusa de un triangulo con catetos de 3 y 4 es", hip)
console.log("el angulo es", angulo)


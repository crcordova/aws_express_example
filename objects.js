var sierra = {color:"amarillo"};
sierra.cut = function(rpm){
    console.log("la sierra de color", this.color, "esta cortando a ", rpm, "revoluciones por segundo")
}
// sierra.cut(10000)
// console.log(Object.getPrototypeOf({}))

// var sierra_Caladora = Object.create(sierra);
// sierra_Caladora.color = "verde";
// sierra_Caladora.cut(5000)

// --------Contructor functions-------//
function Sierras(type, color) {
    this.type = type;
    this.color = color;
}
// -------------add methods and properties
Sierras.prototype.cut = function(rpm) {
    console.log("La sierra", this.type, this.color, "esta cortando a", rpm, "revoluciones por min")
}
Sierras.prototype.luz = function(watts) {
    console.log("Sierra", this.type, "predio la luz a", watts,"watts")
}
Sierras.prototype.energia = "electria";
var sierra1 = new Sierras("Caladora", "Verde");
sierra1.energia="carbon"

// console.log(Sierras.prototype)
// console.log(sierra1.energia)
// sierra1.cut(6520)

var map = {};
map["pizza"] = 123;
map["Burger"] = 521;
for (names in map){
    console.log(names)
}
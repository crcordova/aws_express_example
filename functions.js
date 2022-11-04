const functions = {};

function sumar(x, y) {
    return x+y
}
function restar(x, y) {
    return x-y
}
function elevar(x,y) {
    return x**y
}

function find_hipopotemusa(cateto1, cateto2) {
    return (cateto1 ** 2 + cateto2 ** 2) ** 0.5
}

function find_angle_sin(opuesto, hipotenusa) {
    return Math.asin(opuesto / hipotenusa) * 180/Math.PI
}

function find_angle_cos(adyacnte, hipotenusa) {
    return Math.acos(adyacnte / hipotenusa) * 180/Math.PI
}
function find_angle_tan(adyacnte, opuesto) {
    return Math.acos(opuesto / adyacnte) * 180/Math.PI
}

// agregar propiedd al objeto

functions.sumar = sumar;
functions.restar = restar;
functions.elevar = elevar;
functions.find_hipopotemusa = find_hipopotemusa;
functions.find_angle_sin = find_angle_sin;
functions.find_angle_cos = find_angle_cos;
functions.find_angle_tan = find_angle_tan;

//exporto modulo puede ser objetos funciones o varibles
module.exports = functions;

// solo exporto propiedades del objeto
// exports.sumar = sumar
// exports.restar = restar
// exports.elevar = elevar
// exports.find_hipopotemusa = find_hipopotemusa
// exports.find_angle_sin = find_angle_sin
// exports.find_angle_cos = find_angle_cos
// exports.find_angle_tan = find_angle_tan

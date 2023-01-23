
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = Math.round(valueInDollar * 130.61 *1000)/1000;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = Math.round(valueInYen * 0.0062 * 1000)/1000;
    return valueInPound;
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }
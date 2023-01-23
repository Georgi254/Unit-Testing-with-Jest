test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 4.2; 
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 130.6 japan Yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(3);
    const expected = 391.83; 
     expect(fromDollarToYen(3)).toBe(391.83);
})

test("One yen should be  japan Yen", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(3);
    const expected = 0.019; 
     expect(fromYenToPound(3)).toBe(0.019);
})

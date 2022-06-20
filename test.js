const utils = require('./utils');

expect.extend({
    "nullOrNumber":(received)=>{
        console.log(received)
        return {
                "message" : ()=>{return "Must be null or number"},
                "pass"    : (received === null || typeof received === 'number')
        }
    }
})

test('minNumber non-array test',()=>{
    const giveMeError = () => {
        utils.minNumber("Just a string");
    }
    expect(giveMeError).toThrow("Argument must be an array");
})

test('minNumber empty arr test',()=>{
    expect(utils.minNumber([])).nullOrNumber();
});

test('minNumber regular test',()=>{
    expect(utils.minNumber([3,1,5,2])).toEqual(1)
});

test('minNumber mixed item test',()=>{
    expect(utils.minNumber([3,1,"5",{"a":"b"},2,null])).toEqual(1)
});
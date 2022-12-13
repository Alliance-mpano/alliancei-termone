const { add, subtract, multiply, divide, power, logE, logarithm } = require('../../calculator');

const fakeAddRequest = {
    num1: 2,
    num2: 3,
    operator: "+"
}
const fakeSubtractRequest = {
    num1: 6,
    num2: 3,
    operator: "-"
}
const fakeMultiplyRequest = {
    num1: 2,
    num2: 3,
    operator: "*"
}
const fakeDivideRequest = {
    num1: 9,
    num2: 3,
    operator: "/"
}

it('should add successfully', async () => {
    const result = await add(fakeAddRequest.num1,fakeAddRequest.num2);
    expect(result).toEqual(5);
  });
  it('should subtract successfully', async () => {
    const result = await subtract(fakeAddRequest.num1,fakeAddRequest.num2);
    expect(result).toEqual(3);
  });
  it('should divide successfully', async () => {
    const result = await dive(fakeAddRequest.num1,fakeAddRequest.num2);
    expect(result).toEqual(3);
  });
  it('should fail when finding log10', async () => {
    const result = await logarithm(fakeAddRequest.num1,fakeAddRequest.num2);
    expect(result).toEqual(6);
  });
  it('should fail when finding logE', async () => {
    const result = await logE(fakeAddRequest.num1,fakeAddRequest.num2);
    expect(result).toEqual(6);
  });
  it('should power successfully', async () => {
    const result = await power(fakeAddRequest.num1,fakeAddRequest.num2);
    expect(result).toEqual(8);
  });
 

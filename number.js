const banana = 30.5;
const orange = 10;
const apple = 15.5;

const total = banana + orange + apple;
const discount = total *0.3;
const totalWithDisccount = total - discount;

console.log(`Costo total antes del descuento ${total}`)
console.log(`El valor del descuento ${discount}`)
console.log(`El monto total con el descuento ${totalWithDisccount}`)

const isSimilar = banana == '30.5' 
console.log(`El valor de banana es similar a '30.5'?: ${isSimilar}`)

const isEqual = banana === '30.5' 
console.log(`El valor de banana es igual a '30.5'?: ${isEqual}`)

const string1 = 'hola mundo'
console.log(`la longitud del texto es ${string1.length}`)

const string2 = "  holas   mundos   "
console.log(`El texto transformado usando trim sería ${string2.trim()}`)


const banana = 30.5;
const orange = 10;
const apple = 15.5;

const total = banana + orange + apple;
const discount = total *0.3;
const totalWithDisccount = total - discount;

console.log(`Costo total antes del descuento ${total}`)
console.log(`El valor del descuento ${discount}`)
console.log(`El monto total con el descuento ${totalWithDisccount}`)
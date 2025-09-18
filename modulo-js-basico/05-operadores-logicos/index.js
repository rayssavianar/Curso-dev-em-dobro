/*
     == ---- igual ---- a==b ----- verdadeiro se a for igual a b
     === --- identico ---- a===b --- verdadeiro se a for idêntico a b
     !== ---- nao identico ---- a !== b ----- verdadeiros se a não for identico a b
     != diferente ---- a != b ----- verdadeiro se o a for diferente a b
     < ------ menor que ----- a < b ----- verdadeiro quando a for menor que b
     <= ----- menor igual que ----- a <= b ----- verdadeiro quando a for menor ou igual a b
     > ------ maior que ----- a > b ------ verdadeiro se a for maior a b
     >= ------ maior ou igual ---- a >= b ------ verdadeiro se a for maior ou igual a b
*/

// const a = 3
// const b = 3

// console.log(a >= b)

const a = 2
const b = 2

console.log( a === b && a <= b)
// V  e V = V

console.log( a === b && a < b)
// V e F = F

console.log(a > b && a === b)
// F e V = F

console.log(a > b && a < b)
// F e F = F

// OR

console.log(a ===b || a <= b)
// V ou V = V

console.log(a === b || a < b)
// V ou F = V

console.log(a > b || a === b)
//F ou V = V

console.log(a > b || a < b)
// F ou F = F

// Not

console.log(!(a === b)) //false

console.log(!(a < b)) //true
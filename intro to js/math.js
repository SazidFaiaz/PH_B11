/* variable
    * 1. let x = 10; // block scope
    * 2. const y = 20; // block scope, cannot be reassigned
    * 3. var z = 30; // function scope, can be redeclared and reassigned
    * 
variable types
    * 1. string - "hello"
    * 2. number - 10, 20.5     
    * 3. boolean - true, false
    * 4. null - empty value
    * 5. undefined - variable declared but not assigned a value
    * 6. object - {name: "John", age: 30}
    * 7. array - [1, 2, 3, 4, 5]
    * 8. function - function() {}
    * 9. symbol - unique value
    * 10. bigint - large integer
    * 11. date - new Date()
    * 12. regex - /[a-z]/
    *   13. map - new Map()
    * 14. set - new Set()
    * 15. weakmap - new WeakMap()
    * 16. weakset - new WeakSet()
    * 17. arraybuffer - new ArrayBuffer(10)
    * 18. typedarray - new Uint8Array(10)
    * 19. promise - new Promise((resolve, reject) => {})
*/

var x = 10; // global scope
let y = 20; // block scope  
const z = 30; // block scope, cannot be reassigned
var a = 40; // global scope
let b = 50; // block scope
const c = 60; // block scope, cannot be reassigned


console.log(z); // 30
console.log(a); // 40

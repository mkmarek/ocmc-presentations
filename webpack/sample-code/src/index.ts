import module1 from './module1';
import module2 from './module2';

console.log(module1())
console.log(module2())

// async function foo() { 
//     const module1 = await import('./module1');
//     const module2 = await import('./module2');

//     console.log(module1.default())
//     console.log(module2.default())
// }

// foo();
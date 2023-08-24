export let apiKeys = "ContohAPI1"; //penerapan untuk export
//export default "defaultExp"; //default tidak perlu nama variable dan 1 file tidak dapat berisi 2 default
export let apiKeys3 = "API ke 3";

// function combine(a, b, c) {
//     const result = a * b / c
//     return result
// }

// console.log(combine(2, 5, 2))

export function convertNumber (numberArrayA){
    return numberArrayA.map(number => {return {val: number}});
}
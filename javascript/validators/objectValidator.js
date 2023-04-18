/*
console.log(isObject({})) // returns true
console.log(isObject([])) // returns false
console.log(isObject(null)) // returns false
*/
function isObject(obj) {
    return obj != null && obj.constructor.name === "Object"
}
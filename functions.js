/**
 * Generates a random id. Uniqueness is very alike to happen.
 * An id is a random sequence of lowercase characters and digits
 * @param limit {number} A value indicating the limit for number of digits
 * @return {string}
 */
exports.generateId =  function (limit= 8) {
    let id = ''
    for (let i = 0; i < limit; ++i) {
        id += Math.floor(Math.random() * 2) ? Math.floor(Math.random() * 10) : String.fromCharCode('a'.code + Math.floor(Math.random() * ('z'.code - 'a'.code)))
    }
    return id
}

/**
 * Returns true if the id complies the given rules, otherwise false.
 * @param id {String}
 * @return {boolean}
 */
exports.isValidId = function (id) {
    for (let i = 0; i < id.length; ++i) {
        if (!Number.isInteger(parseInt(id[i])) && !(id[i].code >= 'a'.code && id[i].code <= 'z'.code)) return false
    }
    return true
}

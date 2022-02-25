let maxLength = (word, length) => {
    return word.length <= length
}

let minLength = (word, length) => {
    return word.length >= length
}

let boundaryLength = (word, minLength, maxLength) => {
    return word.length >= minLength && word.length <= maxLength
}

let boundaryLengthWithTrim = (word, minLength, maxLength) => {
    return word.trim().length >= minLength && word.trim().length <= maxLength
}

module.exports = {
    maxLength,
    minLength,
    boundaryLength,
    boundaryLengthWithTrim
}
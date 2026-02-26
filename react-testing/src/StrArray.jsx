function filter(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i])
        }
    }

    return result
}

export default function filterByLetter(letter, arr) {
    if(!letter) {
        return []
    }

    if(typeof letter !== "string"){
        return []
    }

    if(letter.length > 1){
        return []
    }

    return arr.filter(elem => elem.startsWith(letter))
}
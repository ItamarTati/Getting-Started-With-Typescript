function indexOf(letterNeeded: string, sentence: string): number | string {
    for(let index = 0; index < sentence.length; index++){
        let letter = sentence[index]
        if(letter === letterNeeded) return index
    }  

    return 0
}


console.log(indexOf('s', 'where is the map'))
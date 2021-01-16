function sortNumbers(numbers: number[]): number[]{
    return numbers.sort((a, b) => a - b)
}

console.log(sortNumbers([7,8,5,2,6,4,7,9,2,3,1,5,7,3,1,5]))
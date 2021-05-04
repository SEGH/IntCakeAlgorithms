function reverse(arrayOfChars) {

    // Reverse the input array of characters in place

    // Find half of the length of the array and round down
    const halfLength = Math.floor(arrayOfChars.length / 2)
    
    // Loop for half the length of the array, swapping each index with it's reverse pair (first with last, second with second to last)
    for (let i = 0; i < halfLength; i++) {
        let currentValue = arrayOfChars[i]
        let pairIndex = arrayOfChars.length - (i + 1)
        arrayOfChars[i] = arrayOfChars[pairIndex]
        arrayOfChars[pairIndex] = currentValue
    }
  
  }
  
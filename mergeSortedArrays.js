function mergeArrays(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    let mergedArray = []

    // Set variables for starting indexes of both arrays
    let myArrayCurrentIndex = 0;
    let alicesArrayCurrentIndex = 0;

    // While both indexes are still within the length of their arrays
    while (myArrayCurrentIndex < myArray.length && alicesArrayCurrentIndex < alicesArray.length) {

        // Push the value that is the smallest number and increase its array's current index
        if (myArray[myArrayCurrentIndex] < alicesArray[alicesArrayCurrentIndex]) {
            mergedArray.push(myArray[myArrayCurrentIndex])
            myArrayCurrentIndex++
        } else if (alicesArray[alicesArrayCurrentIndex] < myArray[myArrayCurrentIndex]) {
            mergedArray.push(alicesArray[alicesArrayCurrentIndex]);
            alicesArrayCurrentIndex++
        }
    }

    // Loop through the rest of both arrays (one will already be finished) and push the remaining values
    for (let i = myArrayCurrentIndex; i < myArray.length; i++) {
        mergedArray.push(myArray[i])
    }

    for (let i = alicesArrayCurrentIndex; i < alicesArray.length; i++) {
        mergedArray.push(alicesArray[i])
    }

    return mergedArray;
}

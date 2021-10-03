// 1. Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse (arr){
    for (i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

var testArray = [5,4,3,2,1];

console.log(reverse(testArray));


// 2. Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions. 
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr (arr, shiftBy){
    //if shift amount is same number of array places no changes needed return array
    if(Math.abs(shiftBy) == arr.length){
        return arr;
    } else{
        //finds minimal shift if shift is larger than array length
        var minShiftBy = Math.abs(shiftBy) % arr.length;
        }
    if(shiftBy < 0){
        var i = 0;
        while (i<minShiftBy){
            var temp = arr[0];
            for(j=0; j<arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr[arr.length-1] = temp;
            i++
        }
    } else{
        var i = 0;
        while (i<minShiftBy){
            var temp = arr[arr.length-1];
            for(j=arr.length-1; j>0; j--){
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
            i++
        }
    }
    return arr;
}

console.log(rotateArr([1,2,3,4,5], 3))
console.log(rotateArr([1,2,3,4,5], -1))

// 3. Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange (arr, min, max){
    var lenToRemove = 0;
    var validIdx = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] < min || arr[i] > max){
            lenToRemove++;
        } else {
            arr[validIdx] = arr[i];
            validIdx++;
        }
    }

    arr.length = arr.length - lenToRemove;
    return arr;
}

var testArray = [1,3,4,5,8,10,11,45]
console.log(filterRange(testArray, 4, 10))

// 4. Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].


function arrConcat (arr1, arr2){
    arr1Len = arr1.length;
    arr2Len = arr2.length;
    totalLength = arr1Len + arr2Len;

    newArr = arr1;
    for (i = arr1Len; i < totalLength; i++){
        newArr.push(arr2[i-arr1Len]);
    }
    return newArr;
}

testArray1 = ['a', 'b','c'];
testArray2 = [1,2,3];
console.log(arrConcat(testArray1, testArray2))

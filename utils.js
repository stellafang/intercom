/**
 * Converts degrees to radians.
 * @param {Number} degrees 
 */
export const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
}

/**
 * Returns true if the given 2 latlon pairs are within 100km from each other
 * This is calculated using the Great-circle distance formula (@link https://en.wikipedia.org/wiki/Great-circle_distance)
 * @param {Number} lat1 
 * @param {Number} lon1 
 * @param {Number} lat2 
 * @param {Number} lon2 
 */
export const isWithin100Km = (lat1, lon1, lat2, lon2) => {
    if (lat1 < -90 || lat2 < -90 || lat1 > 90 || lat2 > 90) throw new Error('Invalid latitude')
    if (lon1 < -180 || lon2 < -180 || lon1 > 180 || lon2 > 180) throw new Error('Invalid longitude')

    const earthRadius = 6371 // in km
    const lat1Rad = toRadians(lat1)
    const lat2Rad = toRadians(lat2)
    const dLat = toRadians(lat2 - lat1)
    const dLon = toRadians(lon2 - lon1)

    const x = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(dLon / 2), 2)
    const centralAngle = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
    const distance = earthRadius * centralAngle
    return distance <= 100
}

/**
 * Quicksorts an array of objects based on the value at a given key.
 * @param {*} arr array of objects
 * @param {*} left left index
 * @param {*} right right index
 * @param {*} valueName the name of the key to sort on
 */
export const quickSort = (arr, left, right, valueName) => {
    let pivot
    let partitionIndex


    if (left < right) {
        pivot = right;
        partitionIndex = _partition(arr, pivot, left, right, valueName);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1, valueName);
        quickSort(arr, partitionIndex + 1, right, valueName);
    }
    return arr;
}

/**
 * partition helper for quicksort
 * @private
 */
const _partition = (arr, pivot, left, right, valueName) => {
    let pivotValue = arr[pivot][valueName]
    let partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i][valueName] < pivotValue) {
            _swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    _swap(arr, right, partitionIndex);
    return partitionIndex;
}

/**
 * swap helper for quicksort
 * @private
 */
const _swap = (arr, i, j) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
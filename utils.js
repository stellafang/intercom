const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
}

const isWithin100Km = (lat1, lon1, lat2, lon2) => {

    const earthRadius = 6371e3 // in meters
    const lat1Rad = toRadians(lat1)
    const lat2Rad = toRadians(lon2)
    const latDiff = toRadians(lat2 - lat1)
    const lonDiff = toRadians(lon2 - lon1)

    const x = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2)
    const centralAngle = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
    const distance = earthRadius * centralAngle
    return distance <= 100000
}

const quickSort = (arr, left, right) => {
    let pivot
    let partitionIndex


    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

const partition = (arr, pivot, left, right) => {
    let pivotValue = arr[pivot].user_id
    let partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i].user_id < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

const swap = (arr, i, j) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = {isWithin100Km, quickSort}
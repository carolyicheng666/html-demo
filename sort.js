function bubbleSort(data) {
    console.time('bubbleSort');
    var temp = 0;
    for (var i = data.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    console.timeEnd('bubbleSort');
    return data;
}

function selectionSort(data) {
    console.time('selectionSort');
    for (var i = 0; i < data.length; i++) {
        var min = data[i];
        var temp;
        var index = i;
        for (var j = i + 1; j < data.length; j++) {
            if (data[j] < min) {
                min = data[j];
                index = j;
            }
        }

        temp = data[i];
        data[i] = min;
        data[index] = temp;
    }
    console.timeEnd('selectionSort');
    return data;
}

function insertionSort(data) {
    console.time('insertionSort');
    var len = data.length;
    for (var i = 1; i < len; i++) {
        var key = data[i];
        var j = i - 1;
        while (j >= 0 && data[j] > key) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = key;
    }
    console.timeEnd('insertionSort');
    return data;
}

function shallSort(array) {
    console.time('shallSort');
    var increment = array.length;
    var i
    var temp; //暂存
    do {
        //设置增量
        increment = Math.floor(increment / 3) + 1;
        for (i = increment; i < array.length; i++) {
            if (array[i] < array[i - increment]) {
                temp = array[i];
                for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
                    array[j + increment] = array[j];
                }
                array[j + increment] = temp;
            }
        }
    }
    while (increment > 1)
    console.timeEnd('shallSort');
    return array;
}

function mergeSort(array) {
    console.time('mergeSort');
    var len = array.length;
    if (len < 2) {
        return array;
    }
    var middle = Math.floor(len / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    console.timeEnd('mergeSort');
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}

function quickSort(arr) {
    console.time('quickSort')
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    console.timeEnd('quickSort');
    return quickSort(left).concat(pivot, quickSort(right));
}

var dataStore = [72, 1, 68, 95, 75, 54, 58, 10, 35, 6, 28, 45, 69, 13, 88, 99, 24, 28, 30, 31, 78, 2, 77, 82, 72];

console.log('原始数据:' + dataStore);
console.log('冒泡排序:' + bubbleSort(dataStore));
console.log('选择排序:' + selectionSort(dataStore));
console.log('插入排序:' + insertionSort(dataStore));
console.log('希尔排序:' + shallSort(dataStore));
console.log('归并排序:' + mergeSort(dataStore));
console.log('快速排序:' + quickSort(dataStore));
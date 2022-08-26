// 创建一个冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  // #region aaa
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // #endregion aaa
  return arr;
}

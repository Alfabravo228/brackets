module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  let array = [];
  let temp = 0;
  console.log(arr);
  let open = ['(', '{', '[', '|'];
  let closed = [')', '}', ']', '|'];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (arr[i] == open[j]) {
        array.push(arr[i]);
        arr.splice(i, 1, "O");
        cycle2: for (let k = i; k < arr.length; k++) {
          if (arr[k] == closed[j]) {
            array.push(arr[k]);
            arr.splice(k, 1, "P");
            temp++;
            break cycle2;
          }
        }
        if (temp < 1) {
          return false;
        }
      }
    }
    temp = 0;
  }
  if (arr.length != array.length) {
    return false;
  }
  return true;
}

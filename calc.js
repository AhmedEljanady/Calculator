let ans = document.querySelector("#ans");
let fNum, sNum, op, op2, equal, result;

let EnterNumber = function (e) {
  if (op) {
    ans.value = "";
    ans.value += e;
    op2 = op;
    op = "";
    equal = false;
  } else {
    ans.value += e;
    equal = false;
  }
};
let EnterOperator = function (o) {
  if (op || op2) {
    EnterEqual();
    fNum = Number(ans.value);
    op = o;
  } else {
    fNum = Number(ans.value);
    op = o;
  }
};
let EnterEqual = function () {
  op ? (op = op) : (op = op2);
  if (equal) {
    sNum = Number(ans.value);
  } else {
    sNum = Number(ans.value);
    switch (op) {
      case "+":
        ans.value = fNum + sNum;
        break;
      case "*":
        ans.value = fNum * sNum;
        break;
      case "-":
        ans.value = fNum - sNum;
        break;
      case "/":
        if (sNum) {
          ans.value = fNum / sNum;
        } else {
          ans.value = 0;
        }
        break;
    }
  }
  equal = true;
  op = op2 = "";
};
let EnterClear = function () {
  ans.value = fNum = sNum = op = op2 = "";
};

//---------------------------//
//---------with eval()-------//
//---------------------------//

// let ans = document.querySelector("#ans");
// let EnterNumber = function (e) {
//   ans.value += e;
// };
// let EnterOperator = function (e) {
//   ans.value += e;
// };
// let EnterEqual = function () {
//   ans.value = eval(ans.value);
// };
// let EnterClear = function () {
//   ans.value = "";
// };

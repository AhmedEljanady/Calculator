let ans = document.querySelector("#ans");
let fNum, sNum, op, op2, equal;

//  when user enter number
let EnterNumber = function (e) {
  //  if second number after enter the operator
  if (op) {
    ans.value = "";
    ans.value += e;
    /* make another operator variable to allow the user to...
    ...enter more than one number in second number*/
    op2 = op;
    op = "";
    equal = false;
    //  if first number
  } else {
    ans.value += e;
    equal = false;
  }
};
//  when user enter operater
let EnterOperator = function (o) {
  //  if there operator entered and user enter another one
  if (op || op2) {
    EnterEqual();
    fNum = Number(ans.value);
    op = o;
    //  if there no operater entered yet
  } else {
    fNum = Number(ans.value);
    op = o;
  }
};
//  when user enter equal
let EnterEqual = function () {
  //  merge two operator variables to op
  op ? (op = op) : (op = op2);
  //  if equal pressed when no new numbers added
  if (equal) {
    sNum = Number(ans.value);
    //  if equal pressed when new numbers added
  } else {
    sNum = Number(ans.value);
    //  check the operater cases
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
        //  check if user make zero division
        if (sNum) {
          ans.value = fNum / sNum;
        } else {
          //  if zero division return 0
          ans.value = 0;
        }
        break;
    }
  }
  equal = true;
  op = op2 = "";
};
//  when user enter clear
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

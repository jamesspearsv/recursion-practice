function fibs(index) {
  let seq = [0, 1];

  for (let i = 1; seq.length < index; i++) {
    const nextNum = seq[i] + seq[i - 1];
    seq.push(nextNum);
  }

  return seq;
}

console.log("fibs: " + fibs(8));

function fibsRec(n) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

function diaplayFibRec(index) {
  let seq = [];

  for (let i = 0; i < index; i++) {
    seq.push(fibsRec(i));
  }

  return seq;
}

console.log("diaplayFibsRec: " + diaplayFibRec(5));

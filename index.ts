let s: string = "(()(())";

const longestValidParentheses = function (s: string): number{
  /*
  v description:
    temporary = v[0]
    storage = v[1]
    helper = v[2]
    target = v[3]
  */
  let v: [number, number[], Function, number] = [
    0,
    Array(s.length).fill(0),
    function (index: number): number{
      return index >= 0 ? v[1][index] : 0;
    },
    0,
  ];

  for (let i: number = 1; i < s.length; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        v[1][i] = v[2](i - 2) + 2;
      } else {
        v[0] = i - v[1][i - 1] - 1;
        if (v[0] >= 0 && s[v[0]] === "(") {
          v[1][i] = v[1][i - 1] + v[2](v[0] - 1) + 2;
        }
      }
      v[3] = Math.max(...v[1]);
    }
  }
  return v[3];
};

console.log(longestValidParentheses(s));
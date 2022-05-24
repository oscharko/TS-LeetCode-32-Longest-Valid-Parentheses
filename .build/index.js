let s = "(()(())";
const longestValidParentheses = function(s2) {
  let v = [
    0,
    Array(s2.length).fill(0),
    function(index) {
      return index >= 0 ? v[1][index] : 0;
    },
    0
  ];
  for (let i = 1; i < s2.length; i++) {
    if (s2[i] === ")") {
      if (s2[i - 1] === "(") {
        v[1][i] = v[2](i - 2) + 2;
      } else {
        v[0] = i - v[1][i - 1] - 1;
        if (v[0] >= 0 && s2[v[0]] === "(") {
          v[1][i] = v[1][i - 1] + v[2](v[0] - 1) + 2;
        }
      }
      v[3] = Math.max(...v[1]);
    }
  }
  return v[3];
};
console.log(longestValidParentheses(s));
//# sourceMappingURL=index.js.map

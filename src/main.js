export function fizzbuzz(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) res.push("FizzBuzz");
    else if (i % 5 == 0) res.push("Buzz");
    else if (i % 3 == 0) res.push("Fizz");
    else res.push(String(i));
  }
  return res;
}

const result = fizzbuzz(100);
document.querySelector("#app").innerHTML = `
<h1>FizzBuzz</h1>
<div>
${result.map((item) => `<div>${item}</div>`).join("")}
</div>
`;

import "./style.css";

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
<div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center text-slate-900 mb-2">FizzBuzz</h1>
    <p class="text-center text-slate-500 mb-8">Numbers, Fizz & Buzz</p>
    <div class="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-3">
      ${result.map((item) => {
        let bgColor = "bg-white";
        if (item === "Fizz") bgColor = "bg-blue-100 text-blue-700 font-medium";
        else if (item === "Buzz") bgColor = "bg-emerald-100 text-emerald-700 font-medium";
        else if (item === "FizzBuzz") bgColor = "bg-purple-100 text-purple-700 font-medium";
        else bgColor = "bg-slate-100 text-slate-700";
        return `<div class="${bgColor} p-3 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm font-semibold">${item}</div>`;
      }).join("")}
    </div>
  </div>
</div>
`;

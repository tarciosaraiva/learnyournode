var sum = 0,
  numbers = process.argv.slice(2);
numbers.forEach(function (el) {
  sum += Number(el);
});

console.log(sum);
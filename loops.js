console.log("<h2>for</h2>");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr.length; i++) {
  //for
  console.log(arr[i]);
}

console.log("<h2>for each</h2>");
arr.forEach(function (element) {
  //for each
  console.log(element);
});

console.log("<h2>while aka entry status loop</h2>");
let j = 1;
while (j <= 10) {
  //while aka entry status loop
  console.log(j);
  j++;
}

console.log("<h2>do while aka exit status loop</h2>");
let k = 1;
do {
  //do while aka exit status loop
  console.log(k);
  k++;
} while (k <= 10);

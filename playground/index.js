
const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 2, (sum) => {
  console.log(sum); // return 5
});

// setTimeout(() => {
//   console.log("tow second is up");
// }, 2000);

// const names = ["Andrew", "Behnam", "Leamon", "lisa"];

// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       lon: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Mahabad", (data) => {
//   console.log(data);
// });

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 2, (sum) => {
  console.log(sum); // return 5
});

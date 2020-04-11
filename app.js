const request = require("request");

const url =
  "https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=e057d488da8a4a3b916a074965521ff8";

request({ url: url }, (error, response) => {
  const datas = JSON.parse(response.body);
  const array = datas.data;
  let data;
  for (arr of array) {
    data = arr;
  }
  console.log(data);
});

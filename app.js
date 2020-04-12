const request = require("request");

const weather = (location) => {
  const url =
    "https://api.weatherbit.io/v2.0/current?key=e057d488da8a4a3b916a074965521ff8&city=" +
    location;

  request({ url: url }, (error, response) => {
    const datas = JSON.parse(response.body);
    const array = datas.data;

    if (error) {
      console.log("cant access to wearher service!");
    } else if (datas.error) {
      console.log("unable to find location");
    } else {
      let data;
      for (arr of array) {
        data = arr;
      }
      console.log(
        data.weather.description +
          ".  it is currently " +
          data.temp +
          " Celcius degrees out. There is " +
          data.precip +
          " mm/hr precipitation rate"
      );
    }
  });
};

weather("Boston");

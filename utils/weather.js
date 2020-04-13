const request = require("request");
const chalk = require("chalk");
const weather = (location) => {
  const url =
    "https://api.weatherbit.io/v2.0/current?key=e057d488da8a4a3b916a074965521ff8&city=" +
    location;

  request({ url: url }, (error, response) => {
    const datas = JSON.parse(response.body);
    const array = datas.data;

    if (error) {
      console.log(chalk.red.inverse("cant access to wearher service!"));
    } else if (datas.error) {
      console.log(chalk.red.inverse("unable to find location"));
    } else {
      let data;
      for (arr of array) {
        data = arr;
      }
      console.log(
        chalk.inverse(data.timezone + " City : " + chalk.bold(data.city_name))
      );

      console.log(chalk.blue.inverse(data.weather.description + "."));
      console.log(
        chalk.green.inverse(
          "it is currently " + data.temp + " Celcius degrees out."
        )
      );

      console.log(
        chalk.grey.inverse(
          "There is " + data.precip + " mm / hr precipitation rate"
        )
      );
    }
  });
};

module.exports = weather;

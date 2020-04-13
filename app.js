const weather = require("./utils/weather.js");
const chalk = require("chalk");
const address = process.argv[2];
if (!address) {
  console.log(chalk.red.inverse("please enter an address"));
} else {
  weather(address);
}

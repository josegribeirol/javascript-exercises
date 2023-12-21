const convertToCelsius = function(temp) {
  const convertedTemp = (temp - 32) * (5/9);
  return parseFloat(convertedTemp.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  const convertedTemp = (temp * (9/5)) + 32;
  return parseFloat(convertedTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

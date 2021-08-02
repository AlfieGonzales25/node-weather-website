// const request = require("request");
// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=d1168baaa198d27285181f407e1ece98&query=" +
//     latitude +
//     "," +
//     longitude +
//     "&units=f";
//   request({ url, json: true }, (error, { body }) => {
//     if (error) {
//       callback("Unable to connect to weather service!", undefined);
//     } else if (body.error) {
//       callback("Unable to find locations", undefined);
//     } else {
//       callback(
//         undefined,
//         body.current.weather_descriptions[0] +
//           ". It is currently " +
//           body.current.temperature +
//           " degrees out. It feels like " +
//           body.current.feelslike +
//           " degrees out. "
//       );
//     }
//   });
// };
// module.exports = forecast;

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d1168baaa198d27285181f407e1ece98&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to weather services!", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currentlly ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degree out.`
      );
    }
  });
};
module.exports = forecast;

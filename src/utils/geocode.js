// const request = require("request");

// const geocode = (address, callback) => {
//   const url =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxwaG95IiwiYSI6ImNrcnBtMDRtczF2anMyeW85Yzl0a2R6YmEifQ.EpGMGVITh2AkwwPnoBJerw&limit=1";

//   request({ url, json: true }, (error, { body }) => {
//     if (error) {
//       callback("Unable to connect to location services!", undefined);
//     } else if (body.features.length === 0) {
//       callback("Unable to find location. Try another search.", undefined);
//     } else {
//       callback(undefined, {
//         latitude: body.features[0].center[1],
//         longitude: body.features[0].center[0],
//         locations: body.features[0].place_name,
//       });
//     }
//   });
// };

// module.exports = geocode;

const request = require("request");
const geocodes = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/' " +
    encodeURIComponent(address) +
    "'.json?access_token=pk.eyJ1IjoiYWxwaG95IiwiYSI6ImNrcnBtMDRtczF2anMyeW85Yzl0a2R6YmEifQ.EpGMGVITh2AkwwPnoBJerw&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to Connect Weather Services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. try another Search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};
module.exports = geocodes;

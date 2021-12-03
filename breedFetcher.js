const request = require("request");

// const callback = (error, response) => {
//   if (!error) {
//     if (response.body === "[]") {
//       console.log("Requested breed is not found.");
//     } else {
//       const data = JSON.parse(response.body);
//       console.log(data[0].description);
//     }
//   } else {
//     console.log("Request Failed", error);
//   }
// };

// const options = {
//     url: `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
//     headers: {
//       "x-api-key": "3741af87-1e72-4e71-8481-9959b4711f42",
//     },
//   };
//   request(options, callback);

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (!error) {
        const data = JSON.parse(body);
        if (!data[0]) {
          callback("Requested breed is not found", null);
        } else {
          callback(null, data[0].description);
        }
      } else {
        callback(error, null);
      }
    }
  );
};

// fetchBreedDescription();

module.exports = { fetchBreedDescription };

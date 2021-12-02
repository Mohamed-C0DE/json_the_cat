const request = require("request");

const args = process.argv.slice(2);

const options = {
  url: `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  headers: {
    "x-api-key": "3741af87-1e72-4e71-8481-9959b4711f42",
  },
};

const callback = (error, response) => {
  if (!error) {
    if (response.body === "[]") {
      console.log("Requested breed is not found.");
    } else {
      const data = JSON.parse(response.body);
      console.log(data[0].description);
    }
  } else {
    console.log("Request Failed", error);
  }
};

request(options, callback);

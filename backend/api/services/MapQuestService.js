const axios = require("axios");

class MapQuestService {
  async getCoordinates(zipCode) {
    let coordinates = [];
    await axios
      .get(`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&location=${zipCode}`)
      .then(response => {
        const data = response.data;
        coordinates = [
          data.results[0].locations[0].latLng.lng,
          data.results[0].locations[0].latLng.lat,
        ];
      })
      .catch(error => {
        throw new Error(error);
      });

    return coordinates;
  }
}

module.exports = MapQuestService;

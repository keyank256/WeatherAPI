function getWeatherForecast() {
    const apiUrl = 'http://www.7timer.info/bin/api.pl';
    const lon = 32.582;
    const lat = 0.347;
    const product = 'civillight';
    const output = 'json';

    axios.get(apiUrl, {
      params: {
        lon: lon,
        lat: lat,
        product: product,
        output: output
      }
    })
    .then(response => {
      // Display the weather data in the div
      const weatherDataDiv = document.getElementById('weatherData');
      weatherDataDiv.innerText = JSON.stringify(response.data, null, 2);
      var data = JSON.stringify(response.data, null, 2);
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

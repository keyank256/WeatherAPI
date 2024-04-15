 function callApi() {
        const cityName = document.getElementById('selectField').value;
        console.log(cityName);
        const cityCoordinates = getCoordinates(cityName);
        if (cityCoordinates) {
                
        const lat = cityCoordinates.latitude;
        const lon = cityCoordinates.longitude;
        const apiUrl = 'http://www.7timer.info/bin/api.pl';
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
      var data = response.data;
      console.log(data);

      var dateString0 = data.dataseries[0].date.toString();
      var dateString1 = data.dataseries[1].date.toString();
      var dateString2 = data.dataseries[2].date.toString();
      var dateString3 = data.dataseries[3].date.toString();
      var dateString4 = data.dataseries[4].date.toString();
      var dateString5 = data.dataseries[5].date.toString();
      var dateString6 = data.dataseries[6].date.toString();


      // Convert the date string to a Date object
      var dateObject0 = new Date(dateString0.substring(0, 4), // Year
      dateString0.substring(4, 6) - 1, // Month (0-indexed)
      dateString0.substring(6, 8)); // Day
      
      var dateObject1 = new Date(dateString1.substring(0, 4), // Year
      dateString1.substring(4, 6) - 1, // Month (0-indexed)
      dateString1.substring(6, 8)); // Day  
      
      var dateObject2 = new Date(dateString2.substring(0, 4), // Year
      dateString2.substring(4, 6) - 1, // Month (0-indexed)
      dateString2.substring(6, 8)); // Day
      
      var dateObject3 = new Date(dateString3.substring(0, 4), // Year
      dateString3.substring(4, 6) - 1, // Month (0-indexed)
      dateString3.substring(6, 8)); // Day
      
      var dateObject4 = new Date(dateString4.substring(0, 4), // Year
      dateString4.substring(4, 6) - 1, // Month (0-indexed)
      dateString4.substring(6, 8)); // Day
      
      var dateObject5 = new Date(dateString5.substring(0, 4), // Year
      dateString5.substring(4, 6) - 1, // Month (0-indexed)
      dateString5.substring(6, 8)); // Day
      
      var dateObject6 = new Date(dateString6.substring(0, 4), // Year
      dateString6.substring(4, 6) - 1, // Month (0-indexed)
      dateString6.substring(6, 8)); // Day
      
      var options = { weekday: 'short',month: 'short', day: 'numeric' };

document.getElementById('weatherInfo').innerHTML = '<div class="segment" id="day1"></div><div class="segment" id="day2"></div><div class="segment" id="day3"></div><div class="segment" id="day4"></div><div class="segment" id="day5"></div><div class="segment" id="day6"></div><div class="segment" id="day7"></div>';
document.getElementById('day1').innerHTML =   '<p class ="date">'+dateObject0.toLocaleDateString(undefined, options)+ "<div><img id='img1' src='images/clear.png' alt='Clear' width='80' height='60'></div></p><p>"+data.dataseries[0].weather.toUpperCase() +"</p><p>"+ "High: "+data.dataseries[0].temp2m.max+"\u00B0C </p><p>Low: "+data.dataseries[0].temp2m.min+'\u00B0C';
document.getElementById('day2').innerHTML =   '<p class ="date">'+dateObject1.toLocaleDateString(undefined, options)+ "<div><img id='img2' src='images/clear.png' alt='Clear' width='80' height='60'></div></p><p>"+data.dataseries[1].weather.toUpperCase() +"</p><p>"+ "High: "+data.dataseries[1].temp2m.max+"\u00B0C </p><p>Low: "+data.dataseries[1].temp2m.min+'\u00B0C';
document.getElementById('day3').innerHTML =   '<p class ="date">'+dateObject2.toLocaleDateString(undefined, options)+ "<div><img id='img3' src='images/clear.png' alt='Clear' width='80' height='60'></div></p><p>"+data.dataseries[2].weather.toUpperCase() +"</p><p>"+ "High: "+data.dataseries[2].temp2m.max+"\u00B0C </p><p>Low: "+data.dataseries[2].temp2m.min+'\u00B0C';
document.getElementById('day4').innerHTML =   '<p class ="date">'+dateObject3.toLocaleDateString(undefined, options)+ "<div><img id='img4' src='images/clear.png' alt='Clear' width='80' height='60'></div></p><p>"+data.dataseries[3].weather.toUpperCase() +"</p><p>"+ "High: "+data.dataseries[3].temp2m.max+"\u00B0C </p><p>Low: "+data.dataseries[3].temp2m.min+'\u00B0C';
document.getElementById('day5').innerHTML =   '<p class ="date">'+dateObject4.toLocaleDateString(undefined, options)+ "<div><img id='img5' src='images/clear.png' alt='Clear' width='80' height='60'></div></p><p>"+data.dataseries[4].weather.toUpperCase() +"</p><p>"+ "High: "+data.dataseries[4].temp2m.max+"\u00B0C </p><p>Low: "+data.dataseries[4].temp2m.min+'\u00B0C';
document.getElementById('day6').innerHTML =   '<p class ="date">'+dateObject5.toLocaleDateString(undefined, options)+ "<div><img id='img6' src='images/clear.png' alt='Clear' width='80' height='60'></div></p><p>"+data.dataseries[5].weather.toUpperCase() +"</p><p>"+ "High: "+data.dataseries[5].temp2m.max+"\u00B0C </p><p>Low: "+data.dataseries[5].temp2m.min+'\u00B0C';
document.getElementById('day7').innerHTML =   '<p class ="date">'+dateObject6.toLocaleDateString(undefined, options)+ "<div><img id='img7' src='images/clear.png' alt='Clear' width='80' height='60'></div></p><p>"+data.dataseries[6].weather.toUpperCase() +"</p><p>"+ "High: "+data.dataseries[6].temp2m.max+"\u00B0C </p><p>Low: "+data.dataseries[6].temp2m.min+'\u00B0C';
//console.log(data);

var imgElement1 = document.getElementById('img1');

// New source path for the image
var newPath1 = 'images/'+data.dataseries[0].weather+'.png';

// Change the src attribute
imgElement1.src = newPath1;


var imgElement2 = document.getElementById('img2');
var newPath2 = 'images/'+data.dataseries[1].weather+'.png';
imgElement2.src = newPath2;

var imgElement3 = document.getElementById('img3');
var newPath3 = 'images/'+data.dataseries[2].weather+'.png';
imgElement3.src = newPath3;

var imgElement4 = document.getElementById('img4');
var newPath4 = 'images/'+data.dataseries[3].weather+'.png';
imgElement4.src = newPath4;

var imgElement5 = document.getElementById('img5');
var newPath5 = 'images/'+data.dataseries[4].weather+'.png';
imgElement5.src = newPath5;

var imgElement6 = document.getElementById('img6');
var newPath6 = 'images/'+data.dataseries[5].weather+'.png';
imgElement6.src = newPath6;

var imgElement7 = document.getElementById('img7');
var newPath7 = 'images/'+data.dataseries[6].weather+'.png';
imgElement7.src = newPath7;

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
} else {

        document.getElementById('weatherInfo').innerHTML ='<h2> No data found</h2>';
        console.log(`Coordinates not found for ${cityName}`);
    }
    
}

// Define a function to get coordinates based on city name
function getCoordinates(city) {
        const cities = {
            "Amsterdam": { "latitude": 52.367, "longitude": 4.904 },
            "Ankara": { "latitude": 39.933, "longitude": 32.859 },
            "Ã…storp": { "latitude": 56.134, "longitude": 12.945 },
            "Athens": { "latitude": 37.983, "longitude": 23.727 },
            "Belfast": { "latitude": 54.597, "longitude": -5.93 },
            "Barcelona": { "latitude": 41.387, "longitude": 2.168 },
            "Kampala": { "latitude": 0.3152, "longitude": 32.5816 },
            // Add more cities here...
        };
    
        return cities[city];
    }

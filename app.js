"use strict";

searchButton.addEventListener('click', searchWeather);
searchCity.addEventListener('keydown', enterPressed);

function searchWeather() {
  var cityName = searchCity.value;
  if(cityName.trim().length == 0){
    return alert('Please enter a city name');
  };
  var http = new XMLHttpRequest();
  var apiKey = '678c4d7c3a7e0b09e8d5b7bf414af213';
  var url = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function() { 
    if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
      var data = JSON.parse(http.responseText);

      //Using the constructor to create a custom Object with the JSON we fetched
      var weatherData = new Weather(data.name, data.weather[0].description.toUpperCase(), data.sys.country, data.wind.speed, data.wind.deg);
      weatherData.temperature = data.main.temp;
      
      //Set the content of the page
      updateWeather(weatherData);

    } else if (http.readyState == XMLHttpRequest.DONE ) {
        alert('Something Went Wrong!');
    }
  };
  http.send();
}

function updateWeather(weatherData){
  weatherCity.textContent = weatherData.name;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;
  weatherCountry.textContent = weatherData.country;
  weatherBox.style.display = 'block';
  windSpeed.textContent = weatherData.windSpeed;
  windDirection.textContent = weatherData.windDirection;
}

//Enter triggers a button click
function enterPressed (returnedEvent) {
  if(returnedEvent.keyCode == 13) {
    searchButton.click();
  }
}
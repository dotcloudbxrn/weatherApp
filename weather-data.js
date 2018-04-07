"use strict";

function Weather(cityName, description, country, direction, speed) {
  this.name = cityName;
  this.description = description;
  this.country = country;
  this._temperature = '';
  this.windSpeed = speed;
  this.windDirection = direction;
}

Object.defineProperty(Weather.prototype, 'temperature', {
  get: function() {
    return this._temperature;
  },
  set: function(value) {
    this._temperature = (value - 273.15).toFixed() + 'C';
  }
});
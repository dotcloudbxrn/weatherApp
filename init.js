"use strict";

var searchButton = document.querySelector('button');
var searchCity = document.querySelector('#city');

var loadingText = document.querySelector('#load');
var weatherBox = document.querySelector('#weather');

var weatherCity = weatherBox.firstElementChild;
var weatherCountry = document.querySelector('#weatherCountry');
var weatherDescription = document.querySelector('#weatherDescription');
var weatherTemperature = weatherBox.lastElementChild;

var windSpeed = document.querySelector('#windSpeed');
var windDirection = document.querySelector('#windDirection');
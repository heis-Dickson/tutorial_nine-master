"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Todd Nash
   Date:   2025-02-06

*/


//Display the current date & time
document.getElementById('dateNow').innerHTML = `m/d/y<br /> h:m:s`;

//Display the time left until New Years Eve
document.getElementById('days').textContent = `dd`;
document.getElementById('hrs').textContent = `hh`;
document.getElementById('mins').textContent = `mm`;
document.getElementById('secs').textContent = `ss`;

//To store the current date & time
var currentDay = new Date();

//Split the date & time and convert to local convention
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

//Display the current date & time
document.getElementById('dateNow').innerHTML = 
dateStr + '<br />' + timeStr;
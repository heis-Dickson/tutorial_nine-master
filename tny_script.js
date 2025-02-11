"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Todd Nash
   Date:   2025-02-06

*/
//Invoke the function
setInterval(
   "runClock()",
    );

function runClock(){
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

//Calculating the days until January 1st
var newYear = new Date('January 1st, 2026');
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


//Display the time left in the New Years Eve Countdown Clock
document.getElementById('days').innerHTML = Math.floor(daysLeft);
document.getElementById('hrs').innerHTML = Math.floor(hrsLeft);
document.getElementById('mins').innerHTML = Math.floor(minsLeft);
document.getElementById('secs').innerHTML = Math.floor(secsLeft);
}
// shrinkHeader script
// Version: 1.0
// language: jquery

// script to shrink the header and it's content on scroll
// the header is shrinked when the user scrolls down and expanded when the user scrolls up
// shrinkHeader is a function that takes the following parameters:
// shrinkPoint: the point where the header is shrinked
// expandPoint: the point where the header is expanded
// shrinkSpeed: the speed of the shrinking
// expandSpeed: the speed of the expanding

let shrinkPoint = 100;
let expandPoint = 100;
let expandSpeed = 500;
let shrinkSpeed = 500;

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > shrinkPoint) {
            $('.shrinkable').addClass('shrinked');
        } else {
            $('.shrinkable').removeClass('shrinked')
        }
    });
});



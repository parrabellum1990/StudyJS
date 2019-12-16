/*
//первый вариант
var time = 3;
var speedFirst = 12;
var speedSecond = 14;

// неизвестные
var distanceFirst;
var distanceSecond;
var globalDistance;

// ищем
distanceFirst = time * speedFirst;
distanceSecond = time * speedSecond;
globalDistance = distanceFirst + distanceSecond;

// выведем
alert(globalDistance + 'km');
*/
/*
// второй вариант
var time = 3;
var speedFirst = 12;
var speedSecond = 14;

// неизвестные
var speedSummary = speedFirst + speedSecond;
var globalDistance = time * speedSummary;

// выведем
alert(globalDistance + ' КИЛОМЕТРОВ');
*/
/*
// Тест
var number = 2020;
var stringWord = "Наступает: ";
var year = " год!";

var result = stringWord + number + year;

alert(result);
*/
/*
var calculateDistance = function () {
    var time = 3;
    var speedFirst = 12;
    var speedSecond = 14;
    // неизвестные
    var speedSummary = speedFirst + speedSecond;
    var globalDistance = time * speedSummary;
    // выведем
    alert(globalDistance + ' КИЛОМЕТРОВ');
};
calculateDistance();
*/

// var height = 3;
// var width = 5;

var rectangleArea = function (height, width) {
    return 2 * (width + height);
};

alert(rectangleArea(3, 5) + "m2");
var newVariebles = "someExtasions";
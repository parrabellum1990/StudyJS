// Функиця подставляющая необходимые искомые данные для расчёта Закона Ома:
$(document).ready(function () {
    $('#searchVoltage').click(function (e) {
        e.preventDefault();
        $('#searchingParametr').html('U');
        $('#searchingParametrResult').html('U = ');
        $('#firstParametr').html(uprName[0]);
        $('#secondParametr').html(uarName[0]);
        $('#thirdParametr').html(upaName[0]);
    });
    $('#searchAmperage').click(function (e) {
        e.preventDefault(); 
        $('#searchingParametr').html('A');
        $('#searchingParametrResult').html('A = ');
        $('#firstParametr').html(aurName[0]);
        $('#secondParametr').html(apuName[0]);
        $('#thirdParametr').html(aprName[0]);
    });
    $('#searchResistance').click(function (e) {
        e.preventDefault();
        $('#searchingParametr').html('R');
        $('#searchingParametrResult').html('R = ');
        $('#firstParametr').html(rupName[0]);
        $('#secondParametr').html(ruaName[0]);
        $('#thirdParametr').html(rpaName[0]);
    });
    $('#searchPower').click(function (e) {
        e.preventDefault();
        $('#searchingParametr').html('P');
        $('#searchingParametrResult').html('P = ');
        $('#firstParametr').html(purName[0]);
        $('#secondParametr').html(parName[0]);
        $('#thirdParametr').html(puaName[0]);
    });
});
// Комбинации для поиска Напряжения:
var uprName = ['Мощность и Сопротивление', 'P и R'];
var uarName = ['Ток и Сопротивление', 'I и R'];
var upaName = ['Ток и Мощность', 'I и P'];
// Комбинации для поиска Тока:
var aurName = ['Напряжение и Сопротивление', 'U и R'];
var apuName = ['Мощность и Напряжение', 'P и U'];
var aprName = ['Сопротивление и Мощность', 'R и P'];
// Комбинации для поиска Cопротивления:
var rupName = ['Напряжение и Мощность', 'U и P'];
var ruaName = ['Ток и Напряжение', 'I и U'];
var rpaName = ['Мощность и Ток', 'P и I'];
// Комбинации для поиска Мощность:
var purName = ['Сопротивление и Напряжение', 'R и U'];
var parName = ['Сопротивление и Ток', 'R и I'];
var puaName = ['Напряжение и Ток', 'U и I'];
// Список комбинаций:
var uaprName = [' Напряжение (Вольт)', ' Ток (Ампер)', ' Сопротивление (Ом)', ' Мощность (Ватт)'];

// Функция !!указания!! известных искомых данных для поиска искомого параметра:
$(function () {
    // Для первого известного:
    $('#firstParametr').click(function () {
        var firstFind = $('#firstParametr').text();
        if (firstFind == uprName[0]) {
            $('#statusParametr').html(uprName[1]);
            $('#labelParametrX').html(uaprName[3]);
            $('#labelParametrY').html(uaprName[2]);
        } else {
            if (firstFind == aurName[0]) {
                $('#statusParametr').html(aurName[1]);
                $('#labelParametrX').html(uaprName[0]);
                $('#labelParametrY').html(uaprName[2]);
            } else {
                if (firstFind == rupName[0]) {
                    $('#statusParametr').html(rupName[1]);
                    $('#labelParametrX').html(uaprName[0]);
                    $('#labelParametrY').html(uaprName[3]);
                } else {
                    $('#statusParametr').html(purName[1]);
                    $('#labelParametrX').html(uaprName[2]);
                    $('#labelParametrY').html(uaprName[0]);
                }
            }
        }
    });
    // Для второго известного:
    $('#secondParametr').click(function () {
        var secondFind = $('#secondParametr').text();
        if (secondFind == uarName[0]) {
            $('#statusParametr').html(uarName[1]);
            $('#labelParametrX').html(uaprName[1]);
            $('#labelParametrY').html(uaprName[2]);
        } else {
            if (secondFind == apuName[0]) {
                $('#statusParametr').html(apuName[1]);
                $('#labelParametrX').html(uaprName[3]);
                $('#labelParametrY').html(uaprName[0]);
            } else {
                if (secondFind == ruaName[0]) {
                    $('#statusParametr').html(ruaName[1]);
                    $('#labelParametrX').html(uaprName[1]);
                    $('#labelParametrY').html(uaprName[0]);
                } else {
                    $('#statusParametr').html(parName[1]);
                    $('#labelParametrX').html(uaprName[2]);
                    $('#labelParametrY').html(uaprName[1]);
                }
            }
        }
    });
    // Для третьего известного:
    $('#thirdParametr').click(function () {
        var thirdFind = $('#thirdParametr').text();
        if (thirdFind == upaName[0]) {
            $('#statusParametr').html(upaName[1]);
            $('#labelParametrX').html(uaprName[1]);
            $('#labelParametrY').html(uaprName[3]);
        } else {
            if (thirdFind == aprName[0]) {
                $('#statusParametr').html(aprName[1]);
                $('#labelParametrX').html(uaprName[2]);
                $('#labelParametrY').html(uaprName[3]);
            } else {
                if (thirdFind == rpaName[0]) {
                    $('#statusParametr').html(rpaName[1]);
                    $('#labelParametrX').html(uaprName[3]);
                    $('#labelParametrY').html(uaprName[1]);
                } else {
                    $('#statusParametr').html(puaName[1]);
                    $('#labelParametrX').html(uaprName[0]);
                    $('#labelParametrY').html(uaprName[1]);
                }
            }
        }
    });
});
// Функция очистки поля "ПАРАМЕТРЫ" в искомых данных при выборе другого искомого параметра:
$(function () {
    $('.clear-func').click(function (e) { 
        e.preventDefault();
        $('#statusParametr').empty();
        $('#labelParametrX').empty();
        $('#labelParametrY').empty();
    });
});
// Сам расчёт:
$(function () {
    $('#resultCalculate').click(function (e) { 
        e.preventDefault();
        var statusParametr = $('#statusParametr').text();
        // Получим данные из input
        var parametrX = $('#parametrX').val();
        var parametrY = $('#parametrY').val();
        // подготовим комбинации(*,/,^) для X и Y:
        var resultTotalMultiplication = parametrX * parametrY;
        var resultTotalSegmentation = parametrX / parametrY;
        var resultTotalSegmentationYX = parametrY / parametrX;
        var resultTotalRootMultiplication = Math.sqrt(parametrX * parametrY);
        var resultTotalRootSegmentation = Math.sqrt(parametrX / parametrY);
        var resultTotalRootSegmentationYX = Math.sqrt(parametrY / parametrX);
        var resultTotalMultiplicationRootNumeratorYX = Math.pow(parametrY, 2) * parametrX;
        var resultTotalSegmentationRootNumerator = Math.pow(parametrX, 2) / parametrY;
        var resultTotalSegmentationRootNumeratorYX = Math.pow(parametrY, 2) / parametrX;
        var resultTotalSegmentationRootDenominator = parametrX / Math.pow(parametrY, 2);

        // По напряжению:
        if (statusParametr == uprName[1]) {
            resultTotalRootMultiplication;
            $('#resultTotal').html($('#resultTotal').text() + resultTotalRootMultiplication.toFixed(2) + uaprName[0]);
        } else {
            if (statusParametr == uarName[1]) {
                resultTotalMultiplication;
                $('#resultTotal').html($('#resultTotal').text() + resultTotalMultiplication.toFixed(2) + uaprName[0]);
            } else {
                if (statusParametr == upaName[1]) {
                    resultTotalSegmentation;
                    $('#resultTotal').html($('#resultTotal').text() + resultTotalSegmentationYX.toFixed(2) + uaprName[0]);
                }
            }
        }
        // По току:
        if (statusParametr == aurName[1]) {
            resultTotalSegmentation;
            $('#resultTotal').html($('#resultTotal').text() + resultTotalSegmentation.toFixed(2) + uaprName[1]);
        } else {
            if (statusParametr == apuName[1]) {
                resultTotalSegmentation;
                $('#resultTotal').html($('#resultTotal').text() + resultTotalSegmentation.toFixed(2) + uaprName[1]);
            } else {
                if (statusParametr == aprName[1]) {
                    resultTotalRootSegmentationYX;
                    $('#resultTotal').html($('#resultTotal').text() + resultTotalRootSegmentationYX.toFixed(2) + uaprName[1]);
                }
            }
        }
        // По сопротивлению:
        if (statusParametr == rupName[1]) {
            resultTotalSegmentationRootNumerator;
            $('#resultTotal').html($('#resultTotal').text() + resultTotalSegmentationRootNumerator.toFixed(2) + uaprName[2]);
        } else {
            if (statusParametr == ruaName[1]) {
                resultTotalSegmentationYX;
                $('#resultTotal').html($('#resultTotal').text() + resultTotalSegmentationYX.toFixed(2) + uaprName[2]);
            } else {
                if (statusParametr == rpaName[1]) {
                    resultTotalSegmentationRootDenominator;
                    $('#resultTotal').html($('#resultTotal').text() + resultTotalSegmentationRootDenominator.toFixed(2) + uaprName[2]);
                }
            }
        }
        // По мощности:
        if (statusParametr == purName[1]) {
            resultTotalSegmentationRootNumeratorYX;
            $('#resultTotal').html($('#resultTotal').text() + resultTotalSegmentationRootNumeratorYX.toFixed(2) + uaprName[3]);
        } else {
            if (statusParametr == parName[1]) {
                resultTotalMultiplicationRootNumeratorYX;
                $('#resultTotal').html($('#resultTotal').text() + resultTotalMultiplicationRootNumeratorYX.toFixed(2) + uaprName[3]);
            } else {
                if (statusParametr == puaName[1]) {
                    resultTotalMultiplication;
                    $('#resultTotal').html($('#resultTotal').text() + resultTotalMultiplication.toFixed(2) + uaprName[3]);
                }
            }
        }
        if (parametrX[0] == '-') {
            alert('Вы ввели отрицательное значение!');
        }
        if (parametrY[0] == '-') {
            alert('Вы ввели отрицательное значение!');
        }
    });
});
// Кнопка очистить:
$(function () {
    $('#clearCalculate').click(function (e) { 
        e.preventDefault();
        $('#resultTotal').empty();
        $('#resultTotal').text('Значение равно:');
        $('#parametrX, #parametrY').val('');
    });
});
// Валидация полей инпута:
$(function () {
    $('#resultCalculate').click(function (e) { 
        e.preventDefault();
        if (parametrX.lenght == 0) {
            alert('manda!');
        } else {
            
        }
    });
});

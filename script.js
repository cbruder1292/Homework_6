// $(document).ready(function(){


// constructing a queryURL variable we will use instead of the literal string inside of the ajax method

//function signUpForEmail(username, password) {
//we send this to the database;
//}

// Search button 
// I want to CLICK the city-button and get the VALUE stored in city-input
$("#city-button").on("click", function () {

    var inputText = $("#city-input").val()
    searchWeather(inputText);
    searchForecast(inputText);

});
//console.log(inputText);
//searchWeather(inputText);

function searchWeather(data) {
    console.log(data);

    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + data + "&APPID=7a00d594aafd4938f9afdf2e68c6668b";


    $.ajax({
        url: currentWeather,
        method: "GET"
        // the .then() cannot ALWAYS be used with every function.
        // object/JSON
    }).then(function (response) {
        var jsonData = response;
        console.log(jsonData);
        $('#currentWeather').css("display", "block");
        var farTemp = convertTemp(response.main.temp);
        $("#temperature").text("Temperature: " + farTemp + "F");
        $("#humidity").text("Humidity " + response.main.humidity + "%");
        $("#windSpeed").text(response.wind.speed + " mph");
        $("UV").text(response)


    });

}


function searchForecast(data) {
    console.log(data);
    var forecastWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + data + "&appid=7a00d594aafd4938f9afdf2e68c6668b";

    $.ajax({
        url: forecastWeather,
        method: "GET"
    }).then(function (response) {
        console.log(response.list[0].main.temp);
        $('#forecast').css("display", "block");
        var farTemp = convertTemp(response.list[0].main.temp);
        $("#dayOneHumidity").text("Humidity " + response.list[0].main.humidity + "%");
        $("#dayOneTemp").text("Temperature: " + farTemp + "F");

        var farTemp = convertTemp(response.list[8].main.temp);
        $("#dayTwoHumidity").text("Humidity " + response.list[8].main.humidity + "%");
        $("#dayTwoTemp").text("Temperature: " + farTemp + "F");

        var farTemp = convertTemp(response.list[16].main.temp);
        $("#dayThreeHumidity").text("Humidity " + response.list[16].main.humidity + "%");
        $("#dayThreeTemp").text("Temperature: " + farTemp + "F");

        var farTemp = convertTemp(response.list[24].main.temp);
        $("#dayFourTemp").text("Temperature: " + farTemp + "F");
        $("#dayFourHumidity").text("Humidity " + response.list[24].main.humidity + "%");


        var farTemp = convertTemp(response.list[32].main.temp);
        $("#dayFiveTemp").text("Temperature: " + farTemp + "F");
        $("#dayFiveHumidity").text("Humidity " + response.list[32].main.humidity + "%");

        
    });


}

function convertTemp(kelvinTemp){
    var farenTemp = (kelvinTemp - 273.15) * 9/5 + 32;
    return Math.floor(farenTemp);
}


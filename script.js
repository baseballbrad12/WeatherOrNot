var openweather = "https://api.openweathermap.org/data/2.5/forecast?q=";
var APIkey = "17ccfa89bc98c9fc263d38f1ef25b232";


$("#SearchCity").on("click", function ForecastAPI() {
    

    var City = document.getElementById("InputCity").value;
    var Country = document.getElementById("CountrySelect").value;
    var queryURL = openweather + City + "," + Country + "&units=imperial&appid=" + APIkey;

    console.log(queryURL);
    
    $.ajax({
        type: "GET",
        url: queryURL,
        //dataType: "jsonp",
        /*success: function (result) {
            utilizeResponse(result)
        }*/
        success: function (result) {
            $("#WeatherCards").toggle(true);
            utilizeResponse(result);
        },
        error: function (err) {
            $("#WeatherCards").toggle(false);
            alert("The City/Country combination you selected does not exist.");
        },
    });
});

function utilizeResponse(response) {

    console.log(response)

    var eCitySelectedDisplay = document.getElementById("CitySelected");
    var CitySelected = response.city.name;

    eCitySelectedDisplay.innerHTML = "Here is " + CitySelected + "'s 5 Day Forecast!";

    Day1Data(response);
    Day2Data(response);
    Day3Data(response);
    Day4Data(response);
    Day5Data(response);
}

function Day1Data(data){
    var List1 = data.list[0];
    var Temp1 = List1.main.temp;
    var maxtemp1 = List1.main.temp_max;
    var mintemp1 = List1.main.temp_min;
    var weathdesc1 = List1.weather[0].description;
    var iconData1 = List1.weather[0].icon;
    var date1 = List1.dt_txt;
    var icon1 = "http://openweathermap.org/img/w/" + iconData1 + ".png";
    console.log(Temp1)

    $("#icon1").attr("src", icon1);
    $("#Day1").html(date1);
    $("#CurrTemp1").html("Temp Now: " + Temp1 + "°F");
    $("#MaxTemp1").html("Max Temp " + maxtemp1 + "°F");
    $("#MinTemp1").html("Min Temp " + mintemp1 + "°F");
    $("#Desc1").html(weathdesc1);

}

function Day2Data(data){
    var List2 = data.list[8];
    var Temp2 = List2.main.temp;
    var weathdesc2 = List2.weather[0].description;
    var iconData2 = List2.weather[0].icon;
    var date2 = List2.dt_txt;
    var icon2 = "http://openweathermap.org/img/w/" + iconData2 + ".png";
    

    $("#icon2").attr("src", icon2);
    $("#Day2").html(date2);
    $("#CurrTemp2").html("Forecast Temp: " + Temp2 + "°F");
    $("#Desc2").html(weathdesc2);
}

function Day3Data(data){
    var List3 = data.list[16];
    var Temp3 = List3.main.temp;
    var weathdesc3 = List3.weather[0].description;
    var iconData3 = List3.weather[0].icon;
    var date3 = List3.dt_txt;
    var icon3 = "http://openweathermap.org/img/w/" + iconData3 + ".png";

    $("#icon3").attr("src", icon3);
    $("#Day3").html(date3);
    $("#CurrTemp3").html("Forecast Temp: " + Temp3 + "°F");
    $("#Desc3").html(weathdesc3);
}

function Day4Data(data){
    var List4 = data.list[24];
    var Temp4 = List4.main.temp;
    var weathdesc4 = List4.weather[0].description;
    var iconData4 = List4.weather[0].icon;
    var date4 = List4.dt_txt;
    var icon4 = "http://openweathermap.org/img/w/" + iconData4 + ".png";

    console.log(Temp4)

    $("#icon4").attr("src", icon4);
    $("#Day4").html(date4);
    $("#CurrTemp4").html("Forecast Temp: " + Temp4 + "°F");
    $("#Desc4").html(weathdesc4);
}

function Day5Data(data){
    var List5 = data.list[32];
    var Temp5 = List5.main.temp;
    var weathdesc5 = List5.weather[0].description;
    var iconData5 = List5.weather[0].icon;
    var date5 = List5.dt_txt;
    var icon5 = "http://openweathermap.org/img/w/" + iconData5 + ".png";

    console.log(Temp5)

    $("#icon5").attr("src", icon5);
    $("#Day5").html(date5);
    $("#CurrTemp5").html("Forecast Temp: " + Temp5 + "°F");
    $("#Desc5").html(weathdesc5);
}
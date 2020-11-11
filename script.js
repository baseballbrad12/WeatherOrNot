

$("#SearchCity").on("click", () => {
    var City = document.getElementById("InputCity").value;

    GenerateForecast(City)
});


function GenerateForecast(CityInput) {

    var openweather = "https://api.openweathermap.org/data/2.5/weather?q=";
    var APIkey = "17ccfa89bc98c9fc263d38f1ef25b232";
    var queryURL = openweather + CityInput + "&appid=" + APIkey;

    console.log(queryURL);
    
    $.ajax({
        Type: "POST",
        url: queryURL,
        dataType: "json",
        success: utilizeResponse,
        error: function (err){
            console.log(err)
        }
    });

    function utilizeResponse(response) {
        var eCitySelectedDisplay = document.getElementById("CitySelected");
        var CitySelected = response.name;

        eCitySelectedDisplay.textContent = CitySelected;
    }

};



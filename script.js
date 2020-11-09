

$("#SearchCity").on("click", () => {
    var CityName = document.getElementById("InputCity").value;
    var State = $("#StateSelect option:selected").attr("value");

    GenerateForecast(CityName, State)
});

function GenerateForecast(City) {
    
    $.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=17ccfa89bc98c9fc263d38f1ef25b232`,
    method: "GET",
    dataType: "jsonp",
    success: function(data){
            console.log(data);
        }
    })
    .catch(function(err) {
      console.log(err);
    });
};

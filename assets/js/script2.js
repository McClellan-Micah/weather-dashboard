var url= "http://api.openweathermap.org/data/2.5/weather?q=" + "mesa" + "&appid=b7ffc8bb75a65c5bdafd72b274ee4822&units=imperial";
//console.log(JSON.parse(url[0]));


//After the user clicks the button, the program displays the weather data
$(document).ready(function() {
    $("#search-btn").on("click", function() {
        var searchValue = $("#search-value").val();

        // clear input box
        $("#search-value").val("");
        //call function to fetch data
        searchWeather(searchValue);
        var test =   searchWeather(searchValue);
        console.log(test);
        
        //call function to display data
    });
});

//function will make an API call to Open Weather Map and retrieve data
    function searchWeather(searchValue) {
        $.ajax({
            type: "GET",
        
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=b7ffc8bb75a65c5bdafd72b274ee4822&units=imperial",
            dataType: "json",
            success: function(data) {
          
            data = jQuery.parseJSON(data); // <-- *** ADD THIS LINE ***
            console.log(data);
            //history.push(searchValue);
            //window.localStorage.setItem("history", JSON.stringify(history));

        
            //  error: function() {
            //   console.log(data);
            var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
            console.log(title);
            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            var card = $("<div>").addClass("card");
            var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
            var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
            var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
            var cardBody = $("<div>").addClass("card-body");
            console.log(img);
            // merge and add to page
            title.append(img);
            }
          
        });
    }

//Display weather function

//searchCity function 

//searchHistory function
 // get current history, if any
 var history = JSON.parse(window.localStorage.getItem("history")) || [];
 //console.log(history);

//currentDday function

//5day function

//event listeners
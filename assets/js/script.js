//Display weather function

//searchCity function
function searchCity() {
  var cityName = document.querySelector("#city-search").value;
  searchWeather(cityName);
}

function searchWeather(city) {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var todayEl = document.querySelector("#today");
      todayEl.textContent = "";

      var titleEl = document.createElement("h3");
      titleEl.classList.add("card-title");
      titleEl.textContent =
        data.name + " (" + new Date().toLocaleDateString() + ")";
      console.log(data);

      var imgEl = document.createElement("img");
      imgEl.setAttribute(
        "src",
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
      );

      titleEl.appendChild(imgEl);
      //todayEl.appendChild(cardEl);
    });
}

//for current day
//create div, which has elements and classes for temp and humidity
//append child to make it show up
//take todayEl and append the card to todayEl

//uv index and 5day forecast
//fetch request, get new data, wipe current content, then repalce with new content

//event listeners
document.querySelector("#search-btn").addEventListener("click", searchCity);

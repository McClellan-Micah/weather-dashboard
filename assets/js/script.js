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
      todayEl.appendChild(cardEl);
    });
}

//currentDday function

//5day function

//event listeners
document.querySelector("#search-btn").addEventListener("click", searchCity);

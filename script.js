let cityInput = document.getElementById("city");
let searchBtn = document.getElementById("searchBtn");
console.log(cityInput);
console.log(searchBtn);

let cityName = document.querySelector(".weather-card h2");
let temperature = document.querySelector(".weather-card h1");
let description = document.querySelector(".weather-card p");
console.log(cityName);
console.log(temperature);
console.log(description);

let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");

let apiKey = "79a8acf5f67363e6474a39cea955b312";

searchBtn.addEventListener("click", function () {

    let city = cityInput.value;

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            if(data.cod != 200){
                alert("City not found");
                return;
            }

            cityName.innerText = data.name;
            temperature.innerText = data.main.temp + "°C";
            description.innerText = data.weather[0].description;

            humidity.innerText =
                data.main.humidity + "%";

            wind.innerText =
                data.wind.speed + " km/h";

        })
        .catch(error => {
            console.log(error);
        });
});
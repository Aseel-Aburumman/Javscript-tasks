

//     // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//         // q: City name (e.g., q=London).
//         // id: City ID (e.g., id=2172797).
//         // lat and lon: Latitude and longitude (e.g., lat=35&lon=139).
//         // zip: ZIP code (e.g., zip=94040,us).
//         // appid: Your unique API key.
//         // units: Units of measurement (standard, metric, imperial).
//         // lang: Language of the response (e.g., lang=en).
//         // cnt: Number of timestamps (used for forecast data) (e.g., cnt=5).
//         // mode: Response format (json, xml, html).

function yarab() {
    const city = document.getElementById("city").value;
    const myApiKey = '08c17b6e8fbbe47f52dbe17d39d24143';

    const theAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;

    fetch(theAPIURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json(); 
      })

      .then((data) => {

        document.getElementById(
          "location"
        ).textContent = `${data.name}, ${data.sys.country}`;

        document.getElementById(
          "temperature"
        ).textContent = `${data.main.temp}°C`;

        document.getElementById("description").textContent =
          data.weather[0].main;

        document.getElementById(
          "pressure"
        ).textContent = `${data.main.pressure} hPa`;

        document.getElementById(
          "humidity"
        ).textContent = `${data.main.humidity} %`;

        document.getElementById(
          "wind"
        ).textContent = `${data.wind.speed} km/h`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
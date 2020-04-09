const apiURL="https://api.openweathermap.org/data/2.5/weather?zip=83549,us&appid=2df4228aff16d2f69976fb2de87d5dfd&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temperature').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed.toFixed(0);

    const temperature = jsObject.main.temp;
    const windSpeed = jsObject.wind.speed;
    const windChill = 35.74 + 0.6215 * temperature 
    - 35.75 * Math.pow(windSpeed, 0.16) 
    + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

    if (temperature <= 50 && windSpeed > 3.0)
    {
        document.getElementById("wind-chill").innerHTML = windChill.toFixed(0) + "&deg; F";
    }
    else {
        document.getElementById("wind-chill").textContent = "N/A"
    }
  });


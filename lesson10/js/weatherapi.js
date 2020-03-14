const apiURL="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2df4228aff16d2f69976fb2de87d5dfd&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('weather-icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('weather-icon').setAttribute('alt', desc);
  });


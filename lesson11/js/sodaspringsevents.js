const eventsURL="https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=2df4228aff16d2f69976fb2de87d5dfd&units=imperial";
fetch(eventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
  });

const sodaSpringsEventsURL="https://byui-cit230.github.io/weather/data/towndata.json";
const pagetowns = ["Soda Springs"];
fetch(sodaSpringsEventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    for (let i = 0; i < towns.length; i++ ) {
      if (pagetowns.includes(towns[i].name))
      {
      }
    }    
  });
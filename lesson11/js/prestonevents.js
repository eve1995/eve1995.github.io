const prestonEventsURL="https://byui-cit230.github.io/weather/data/towndata.json";
const pagetowns = ["Preston"];
fetch(prestonEventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    for (let i = 0; i < towns.length; i++ ) {
      if (pagetowns.includes(towns[i].name))
      {
      }
    }    
  });

const sodaSpringsEventsURL="https://byui-cit230.github.io/weather/data/towndata.json";
fetch(sodaSpringsEventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const pagetowns = ["Soda Springs"];
    const towns = jsObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (pagetowns.includes(towns[i].name))
        {
          const eventArray = towns[i].events;
          eventArray.forEach(element => 
          {
              let divEvent = document.createElement('div');
                
              divEvent.innerHTML = element;
              
              document.getElementById('event-list').appendChild(divEvent);
          }); 
        }
    }    
  });

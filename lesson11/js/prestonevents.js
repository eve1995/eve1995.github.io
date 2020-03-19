const prestonEventsURL="https://byui-cit230.github.io/weather/data/towndata.json";
const pagetowns = ["Preston"];
fetch(prestonEventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    for (let i = 0; i < towns.length; i++ ) {
        if (pagetowns.includes(towns[i].name))
        {
            // Get the variable from the JSON file (array)
            const eventArray = towns[i].events;
            
            // loop over all elements
            eventArray.forEach(element => 
            {
                // 1. Create a variable: 
                let divEvent = document.createElement('div');

                // 2. Set the content of the div:  
                divEvent.TextContent = element;

                // 3. Append div to event-list: 
                document.getElementById('event-list').appendChild(divEvent);
            }); 
        }
    }    
  });

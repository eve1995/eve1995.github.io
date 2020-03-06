const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const pagetowns = ["Preston", "Fish Haven", "Soda Springs"];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (pagetowns.includes(towns[i].name))
        {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let motto = document.createElement('div');
            let yearFounded = document.createElement('div');
            let population = document.createElement('div');
            let annualRainfall = document.createElement('div');
            
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            motto.setAttribute('class', 'motto');
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            yearFounded.setAttribute('class', 'towninfo');
            population.textContent = 'Population: ' + towns[i].population;
            population.setAttribute('class', 'towninfo');
            annualRainfall.textContent = 'Annual Rainfall: ' + towns[i].annualRainfall;
            annualRainfall.setAttribute('class', 'towninfo');
            image.setAttribute('src', 'images/'+ towns[i].photo);
            image.setAttribute('alt', 'Photo of ' + towns[i].name);
            
            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(population);
            card.appendChild(annualRainfall);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        } 
    }
  });

  
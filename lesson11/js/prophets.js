const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let dateofbirth = document.createElement('div');
        let placeofbirth = document.createElement('div');
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', h2.textContent + ' - '+ prophets[i].order);
        dateofbirth.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        placeofbirth.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        
        card.appendChild(h2);
        card.appendChild(dateofbirth);
        card.appendChild(placeofbirth);
        card.appendChild(image);
        
        document.querySelector('div.cards').appendChild(card);
    } 
  });

  
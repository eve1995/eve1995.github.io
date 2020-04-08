    console.table(personas); 

    for (let i = 0; i < personas.length; i++ ) {
        let persona = document.createElement('div');
        let name = document.createElement('h2');
        let imagep = document.createElement('p'); 
        let image = document.createElement('img');
        let summaryp = document.createElement('p'); 
        let summary = document.createElement('ul');
        let certificationLevel = document.createElement('li');
        let yearsExperience = document.createElement('li');
        let email = document.createElement('li');
        let biography = document.createElement('p');
        
        name.textContent = personas[i].name;
        image.setAttribute('src', 'images/' + personas[i].picture);
        image.setAttribute('alt', personas[i].name);
        certificationLevel.textContent = 'Certification Level: ' + personas[i].certificationLevel;
        yearsExperience.textContent =  'Experience: ' + personas[i].yearsExperience;
        email.textContent =  'Email: ' + personas[i].email;
        biography.textContent =  personas[i].biography;

        imagep.appendChild(image);

        summary.appendChild(yearsExperience);
        summary.appendChild(certificationLevel);
        summary.appendChild(email);

        summaryp.appendChild(summary);

        persona.appendChild(name);
        persona.appendChild(imagep);
        persona.appendChild(biography);
        persona.appendChild(summaryp);
        
        document.querySelector('.personas').appendChild(persona);
    } 

const countriesList = document.getElementById('countriesList');

fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
    .then(response => response.json())
    .then(data => {
        // Process the data and create country cards
        data.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('col-md-4', 'mb-4', 'country-card');

            countryCard.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${country.id}</h5>
                        <p class="card-text">width: ${country.width}</p>
                        <p class="card-text">height: ${country.height} sq km</p>
                    </div>
                </div>
            `;

            countriesList.appendChild(countryCard);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

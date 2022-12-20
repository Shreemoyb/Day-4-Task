
//  use -> https://restcountries.com/v3.1/name/all, to get flag of all countries.
//  Also get country Names, regions, Sub-regions and populations.

const countriesRequest = new XMLHttpRequest();

countriesRequest.open('GET', 'https://restcountries.com/v3.1/name/all');

countriesRequest.send();

countriesRequest.onload = function() {
const countries = JSON.parse(countriesRequest.responseText);

function displayCountryInfo (country) {
    console.log(country.name.common, country.flag, country.region, country.subregion, country.population);
}
countries.forEach(displayCountryInfo);
}

    
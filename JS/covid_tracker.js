async function covidApi() {
    const covidData = await fetch(' https://corona-api.com/countries');
    const covidDataJson = await covidData.json();
    const dataIndia = covidDataJson.data[96];
    document.getElementById('title-country').textContent = dataIndia.name;
    document.getElementById('new-confirmed').textContent = dataIndia.today.confirmed;
    document.getElementById('new-deaths').textContent = dataIndia.today.deaths;
    document.getElementById('new-recovered').textContent = `${dataIndia.today.recovered ? dataIndia.today.recovered : '--'}`;
    document.getElementById('total-confirmed').textContent = dataIndia.latest_data.confirmed;
    document.getElementById('total-critical').textContent = dataIndia.latest_data.critical;
    document.getElementById('total-deaths').textContent = dataIndia.latest_data.deaths;
    document.getElementById('total-recovered').textContent = dataIndia.latest_data.recovered;   
};

covidApi();
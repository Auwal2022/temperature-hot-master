const API_KEY = `5a75ee1b27d936600f931f3d8f17b044`;

const searchTemp = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemp(data));

}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = (temp) => {
    console.log(temp);
    setInnerText('city', temp.name);
    setInnerText('temp-hot', temp.main.temp);
    setInnerText('condition', temp.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    document.getElementById('weather-icon').setAttribute('src', url);
}
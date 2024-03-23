






const key = 'c0e8bde454822b66ca86dc975063465b';
const vla = document.querySelector('.vla');
const country = document.querySelector('.country');
const temp = document.querySelector('.deg');
const speed = document.querySelector('.speed');

async function weather(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    
    const deg = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const weatherMain = data.weather[0].main;
    zamena(city, deg, humidity, wind, weatherMain);
}

function zamena(city, degree, vlaz, sko, weatherMain) {
    vla.textContent = vlaz + "%";
    country.textContent = city;
    temp.textContent = degree + "°C";
    speed.textContent = sko + " km/h";
    changeWeatherImage(weatherMain);
}

function changeWeatherImage(weatherMain) {
    const weatherImg = document.querySelector('.main');
    if (weatherMain === 'Clear') {
        weatherImg.src = 'images/clear.png';
        weatherImg.alt = 'Clear Sky';
    } else if (weatherMain === 'Rain') {
        weatherImg.src = 'images/rain.png';
        weatherImg.alt = 'Rainy Weather';
    } 
    else if (weatherMain === 'Clouds') {
        weatherImg.src = 'images/clouds.png';
        weatherImg.alt = 'Clouds Sky';
    }
    else if (weatherMain === 'Drizzle') {
        weatherImg.src = 'images/drizzle.png';
        weatherImg.alt = 'Rainy Weather';
    }
    else if (weatherMain === 'Snow') {
        weatherImg.src = 'images/snow.png';
        weatherImg.alt = 'Snowy Weather';
    }
    else if (weatherMain === 'Mist') {
        weatherImg.src = 'images/mist.png';
        weatherImg.alt = 'Mist Weather';
    }
    else {
        weatherImg.src = 'images/default.png';
        weatherImg.alt = 'Weather';
    }
}

document.querySelector('.poisk').addEventListener('click', () => {
    const city = document.querySelector('input').value;
    weather(city);
});


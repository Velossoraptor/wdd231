const weatherImage = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.24&lon=-76.49&units=metric&appid=0c061ab6f17b6094fcd82cba9e7fadad';
// 44.24316109887574, -76.4946130164592

async function apiFetchCurrent() {
    if(weatherImage != null && currentTemp != null && captionDesc != null){
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayResults(data);
            } else {
                throw Error(await response.text());
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

async function apiFetchForecast() {
    if(weatherImage != null && currentTemp != null && captionDesc != null){
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                displayResultsForecast(data);
            } else {
                throw Error(await response.text());
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.name}, ${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherImage.setAttribute('src', iconsrc);
    weatherImage.setAttribute('alt', desc);
    captionDesc.textContent = `${toTitleCase(desc)}`;
}

function displayResultsForecast(data) {
    currentTemp.innerHTML = `${data.name}, ${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherImage.setAttribute('src', iconsrc);
    weatherImage.setAttribute('alt', desc);
    captionDesc.textContent = `${toTitleCase(desc)}`;
}

function toTitleCase(str) {
  if (!str) {
    return "";
  }
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

apiFetchCurrent();

// export default apiFetch;
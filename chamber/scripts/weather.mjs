const weatherImage = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#weather-caption');

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const forecastArray = document.querySelectorAll('.forecast-day');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.24&lon=-76.49&units=metric&appid=0c061ab6f17b6094fcd82cba9e7fadad';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.24&lon=-76.49&units=metric&appid=0c061ab6f17b6094fcd82cba9e7fadad';
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
    if(forecastArray != null){
        try {
            const response = await fetch(forecastUrl);
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
    let tracker = 0;
    forecastArray.forEach((day) => {
        let date = document.createElement('p');
        let temp = document.createElement('span');

        if(tracker == 0){
            date.innerHTML = '<b>Today<b>: ';
            let dateData = data.list[tracker].dt_txt;
            let dateTxt = new Date(dateData.split(" ")[0]);
        }else{
            let dateData = data.list[tracker].dt_txt;
            let dateTxt = new Date(dateData.split(" ")[0]);
            date.innerHTML = `${daysOfWeek[dateTxt.getUTCDay()]}: `;
        }

        temp.innerHTML = `${data.list[tracker].main.temp}&deg;C`;

        date.appendChild(temp);
        day.appendChild(date);

        tracker = tracker+8;
    });
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
apiFetchForecast();
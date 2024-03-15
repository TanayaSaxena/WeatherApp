const options =
{
    method: 'GET',
    headers:
    {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData(city) 
{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    try 
    {
        const response = await fetch(url, options);
        const result = await response.json();

        const temp = document.getElementById("temp");
        const temp2 = document.getElementById("temp2");
        const feels_like = document.getElementById("feels_like");
        const humidity = document.getElementById("humidity");
        const humidity2 = document.getElementById("humidity2");
        const min_temp = document.getElementById("min_temp");
        const max_temp = document.getElementById("max_temp");
        const wind_speed = document.getElementById("wind_speed");
        const wind_speed2 = document.getElementById("wind_speed2");
        const wind_degrees = document.getElementById("wind_degrees");
        const sunrise = document.getElementById("sunrise");
        const sunset = document.getElementById("sunset");
        const cityName = document.getElementById("cityName");

        cityName.innerHTML = city;

        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;

    }
    catch (error) 
    {
        console.error(error);
    }
}

const submit = document.getElementById("submit");
submit.addEventListener("click", async (e) => 
{
    e.preventDefault();
    const city = document.getElementById("city").value;
    await fetchData(city);
});

fetchData("Delhi");
const searchButton = ()=>{
    const apiKey = `a9f3d6e4baafb79021e0c511f3a1559f`
    const searchInput = document.getElementById("search-input");
    const searchInputText = searchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputText} &appid=${apiKey}&units=metric`
    searchInput.value = ''
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeatherData(data)) 
    .catch(error => displayError(error))
}
 

function displayError(error){
    document.getElementById("error-something").style.display = "block"
}

const displayWeatherData =(temperature)=>{
    
     document.getElementById("cityName").innerText = temperature.name 
     document.getElementById("weatherPercentage").innerText = temperature.main.temp;
     document.getElementById("weatherCondition").innerText = temperature.weather[0].main;
     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`

     const weatherIcon =document.getElementById("weatherIcon");
     weatherIcon.setAttribute("src", url);
}
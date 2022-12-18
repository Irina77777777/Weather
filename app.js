fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19 ")
  .then((res) => res.json())
  .then((data) => {
    let div = document.createElement("div");
   // div.innerHTML = data.name.toUpperCase();
    document.body.prepend(div);
    console.log(data);
    
    document.querySelector("#cit").innerHTML = data.name.toUpperCase();
  
    document.querySelector("#title").innerHTML = `${data.main.temp}`;
    document.querySelector("#dav").innerHTML = `${data.main.pressure}`;
    document.querySelector("#hum").innerHTML = `${data.main.humidity}`;
    document.querySelector("#speed").innerHTML = `${data.wind.speed}`;
    document.querySelector("#deg").innerHTML = `${data.wind.deg}`;
    document.querySelector("#op").innerHTML = `${data.weather[0].description}`;
    

})

        // const apikey="863242cfb2b1d357e6093d9a4df19a4b";//apikey issue thats why project not working
        // const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore";//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

        // const searchbox = document.querySelector(".search input");
        // const searchbtn = document.querySelector(".search button");
        // const weathericon = document.querySelector(".weather-icon");

        // async function checkwheater(){
        //     const response = await fetch(apiurl + "&appid=" + apikey);

        //     if(response.status == 404){
        //         document.querySelector(".error").style.display = "block";
        //         document.querySelector(".wheater").style.display = "none";
        //     }
        //     else{
                
        //     if(data.weather[0].main == "Clouds"){
        //         document.querySelector(".weather-icon").src = "./cloud.png";
        //     }
        //     else if(data.weather[0].main == "Clear"){
        //         document.querySelector(".weather-icon").src = "./clear.png";
        //     }
        //     else if(data.weather[0].main == "Rain"){
        //         document.querySelector(".weather-icon").src = "./rain.png";
        //     }
        //     else if(data.weather[0].main == "Drizzle"){
        //         document.querySelector(".weather-icon").src = "./drizzle.png";
        //     }
        //     else if(data.weather[0].main == "Mist"){
        //         document.querySelector(".weather-icon").src = "./mist.png";
            
        //     }
        //     }
        //     var data = await response.json();
        //     console.log(data);


        //     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        //     document.querySelector(".city").innerHTML = data.name;
        //     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        //     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        //     document.querySelector(".wheater").style.display = "block";
        //     document.querySelector(".error").style.display = "none";
        // }

        // searchBtn.addEventListener("click", () =>{
        //     checkwheater(searchBtn.value);
        // })
        let button = document.getElementById("btn")
    button.addEventListener("click", () => {
    let city = document.getElementById("city").value
    let apikey = "dcc41583b4577073ab7f1a7a6246d406"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    let temp = document.getElementById("temp")
    let hum = document.getElementById("hum")
    let wd = document.getElementById("wd")
    let name = document.getElementById("name")
    fetch(api)
        .then(x => x.json())
        .then(y =>{
            if (y.cod != "200") {
                alert("city not found")
            }
            else {
                temp.innerHTML = `
            <p> <h1>${y.main.temp}</h1></p>
            `   
            hum.innerHTML=`
            <h2>${y.weather[0].description}</h2>
            `
            wd.innerHTML=`
            <h1> ${y.wind.speed}</h1>
            `
            name.innerHTML=`
            <h2>${y.name}, ${y.sys.country}</h2>
            `
            }
        })
})
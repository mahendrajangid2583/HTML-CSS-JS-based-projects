console.log('js working');

const API_KEY="d5abd6032e5744428af161327240704";

function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data.current.temp_c} °C`;

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){

    try{
        let city="sangrur";
        const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
    
        const data=await response.json();
        console.log("weather data:->",data);
        
        renderWeatherInfo(data);
        
    }
    catch(err){
        //handle the error
        console.log("Error Found->",err);
    }
    

}
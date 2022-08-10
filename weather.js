

let weather={
    'apikey':'eb7279252eb9be9f4dde44fff56b25f3',
    fetchWeather: function(city)
{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}`
    ).then((res)=> res.json())
    .then((data)=>this.displayWeather(data)) ;
},
displayWeather: function(data){
    const {name}=data;
    const {icon, description}= data.weather[0];
    const {temp,humidity}= data.main;
    const {speed}=data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector('.city').innerText='Weather in '+name;
    document.querySelector('.icon').src='http://openweathermap.org/img/wn/'+icon+'@2x.png'
    document.querySelector('.temp').innerText=Math.ceil((temp-273)*9/5+32)+'°F'
    document.querySelector('.description').innerText=description;
    document.querySelector('.humidity').innerText=humidity+'% humidity';
    document.querySelector('.wind').innerText='Wind Speed: '+Math.ceil(speed)+'mph'
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+ name +"')"
},
    search: function (){
        this.fetchWeather(document.querySelector('input').value)   
    }
}

document.querySelector('.search button').addEventListener('submit',(e)=>{
    e.preventDefault()
    weather.search()

})

document.querySelector('.search-bar').addEventListener('keyup',(e)=>{
    e.preventDefault()
    if(e.key==='Enter'){
    weather.search()
    }
})


weather.fetchWeather('chicago')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64e02cf0admshd1e46d8e4e41e6ap1851eejsna30fbdbaa658',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
		
		console.log(response)
		
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click" ,(e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi") 

const getWeatherToranto = (Toronto) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto' , options)
	.then(response => response.json())
	.then((response) => {
		
		console.log(response)
		
		// cloud_pct.innerHTML = response.cloud_pct
		Torontotemp.innerHTML = response.temp
		// temp2.innerHTML = response.temp
		Torontofeels_like.innerHTML = response.feels_like
		Torontohumidity.innerHTML = response.humidity
		// humidity2.innerHTML = response.humidity
		Torontomin_temp.innerHTML = response.min_temp
		Torontomax_temp.innerHTML = response.max_temp
		Torontowind_speed.innerHTML = response.wind_speed
		// wind_speed2.innerHTML = response.wind_speed
		Torontowind_degrees.innerHTML = response.wind_degrees
		// Torontosunrise.innerHTML = response.sunrise
		// Torontosunset.innerHTML = response.sunset
		
	})
	.catch(err => console.error(err));
}
getWeatherToranto("Toronto")

const getWeatherBoston = (Boston) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston' , options)
	.then(response => response.json())
	.then((response) => {
		
		console.log(response)
		
		// cloud_pct.innerHTML = response.cloud_pct
		Bostontemp.innerHTML = response.temp
		// temp2.innerHTML = response.temp
		Bostonfeels_like.innerHTML = response.feels_like
		Bostonhumidity.innerHTML = response.humidity
		// humidity2.innerHTML = response.humidity
		Bostonmin_temp.innerHTML = response.min_temp
		Bostonmax_temp.innerHTML = response.max_temp
		Bostonwind_speed.innerHTML = response.wind_speed
		// wind_speed2.innerHTML = response.wind_speed
		Bostonwind_degrees.innerHTML = response.wind_degrees
		// Torontosunrise.innerHTML = response.sunrise
		// Torontosunset.innerHTML = response.sunset
		
	})
	.catch(err => console.error(err));
}
getWeatherBoston("Boston")

const getWeatherShanghai = (Shanghai) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai' , options)
	.then(response => response.json())
	.then((response) => {
		
		console.log(response)
		
		// cloud_pct.innerHTML = response.cloud_pct
		Shanghaitemp.innerHTML = response.temp
		// temp2.innerHTML = response.temp
		Shanghaifeels_like.innerHTML = response.feels_like
		Shanghaihumidity.innerHTML = response.humidity
		// humidity2.innerHTML = response.humidity
		Shanghaimin_temp.innerHTML = response.min_temp
		Shanghaimax_temp.innerHTML = response.max_temp
		Shanghaiwind_speed.innerHTML = response.wind_speed
		// wind_speed2.innerHTML = response.wind_speed
		Shanghaiwind_degrees.innerHTML = response.wind_degrees
		// Torontosunrise.innerHTML = response.sunrise
		// Torontosunset.innerHTML = response.sunset
		
	})
	.catch(err => console.error(err));
}
getWeatherShanghai("Shanghai")

 


function getWeather() {
	const cityInput = document.getElementById("city").value;
	const apiKey = "5e937b4952msh0cd60cae124352dp1bd119jsna9ca7300a732"; // replace with your API key from RapidAPI

	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
			"x-rapidapi-key": apiKey
		}
	})
	.then(response => response.json())
	.then(data => {
		const weatherDiv = document.getElementById("weather");
		weatherDiv.innerHTML = `
			<p><strong>City :</strong> ${data.location.name}</p>
			<p><strong>Country :</strong> ${data.location.country}</p>
			<p><strong>Temperature :</strong> ${data.current.temp_c}°C (${data.current.temp_f}°F)</p>
			<p><strong>Condition :</strong> ${data.current.condition.text}</p>
			<p><strong>Wind Speed :</strong> ${data.current.wind_kph} km/h (${data.current.wind_mph} mph)</p>
			<p><strong>Humidity :</strong> ${data.current.humidity} %</p>
           
            <p><strong>Visibility :</strong> ${data.current.vis_km} km (${data.current.vis_miles} miles)</p>     
           
		`;
        // <p><strong>Wind Direction :</strong> ${data.current.wind_dir}%</p>
	})
	.catch(err => console.error(err));
}  

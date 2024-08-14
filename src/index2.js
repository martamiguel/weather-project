//Homework 1
let weather = {
  Paris: { temp: 19.7, humidity: 80 },
  Tokyo: { temp: 17.3, humidity: 50 },
  Lisbon: { temp: 30.2, humidity: 20 },
  "San francisco": { temp: 20.9, humidity: 100 },
  Oslo: { temp: -5, humidity: 20 },
};

let city = prompt("Enter a city");
city = city.trim().toLowerCase().charAt(0).toUpperCase() + city.slice(1);

if (weather[city] !== undefined) {
  let celsius = Math.round(weather[city].temp);
  let fahrenheit = Math.round((weather[city].temp * 9) / 5 + 32);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${celsius}°C (${fahrenheit}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

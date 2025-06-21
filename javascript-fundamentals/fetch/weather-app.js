async function getWeather(city) {
  try {
    const encodedCity = encodeURIComponent(city);
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/weather?q=${encodedCity}`);
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
    async function showWeather(city) {
      const data = await getWeather(city);
      if (!data) {
        alert("Something went wrong, please try again later.");
        return;
      }

      document.getElementById("weather-icon").src = data.weather?.[0]?.icon || "";
      document.getElementById("weather-icon").alt = data.weather?.[0]?.description || "Weather Icon";
      document.getElementById("main-temperature").textContent = data.main?.temp ?? "N/A";
      document.getElementById("feels-like").textContent = data.main?.feels_like ?? "N/A";
      document.getElementById("humidity").textContent = data.main?.humidity ?? "N/A";
      document.getElementById("wind").textContent = data.wind?.speed ?? "N/A";
      document.getElementById("wind-gust").textContent = data.wind?.gust ?? "N/A";
      document.getElementById("weather-main").textContent = data.weather?.[0]?.main ?? "N/A";
      document.getElementById("location").textContent = data.name ?? "N/A";
    }

    document.getElementById("get-weather").addEventListener("click", () => {
      const city = document.getElementById("city-select").value;
      if (!city) return;
      showWeather(city);
    });
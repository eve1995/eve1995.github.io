const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
const windChill = 35.74 + 0.6215 * temperature 
    - 35.75 * Math.pow(windSpeed, 0.16) 
    + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

if (temperature <= 50 && windSpeed > 3.0)
{
    document.getElementById("wind-chill").innerHTML = windChill.toFixed(1) + "&deg; F";
}
else {
    document.getElementById("wind-chill").textContent = "N/A"
}
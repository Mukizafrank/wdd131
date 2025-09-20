// Footer year and last modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Wind chill calculation
    function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Display windchill if conditions are met
const temperature = 22; // Static temperature in Celsius
const windSpeed = 5; // Static wind speed in km/h

const windChillElement = document.getElementById('windchill');

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill}°C`;
} else {
    windChillElement.textContent = 'N/A';
}
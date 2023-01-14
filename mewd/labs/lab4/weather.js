link =
  "https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d99e07aa3ec08b485cb7f451caf958c4";
var request = new XMLHttpRequest();
request.open("GET", link, true);

request.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById("weather").innerHTML = obj.weather[0].description;
  document.getElementById("location").innerHTML = obj.name;
  document.getElementById("temperature").innerHTML = Math.round(
    obj.main.temp - 273.15
  );
};

if (request.status == 200) {
  console.log("ERROR");
}
request.send();
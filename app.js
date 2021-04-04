var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

function weatherAPI()
{
    const city=document.getElementById("place").value;
    console.log(city);
    let apiEndpoint="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=1f8814b5b121781e46b00312c32e5df8";
    console.log(apiEndpoint);
    fetch(apiEndpoint)
    .then(resolve => resolve.json())
    .then(json=>displayInfo(json))
    .catch(err=>console.log(err));
}

function displayInfo(json)
{
    console.log(json);
    const country=json.sys.country;

    let displayBox1=document.getElementById("city_country");
    displayBox1.textContent=json.name+","+country;

    let displayBox2=document.getElementById("date_time");
    today=new Date();
    displayBox2.textContent=weekday[today.getDay()]+" "+today.getDate()+" "+today.getFullYear();

    let displayBox3=document.getElementById("temp");
    let cel=json.main.temp-273.15;
    displayBox3.textContent=parseInt(cel)+'\u00B0c ';

    let displayBox4=document.getElementById("weather");
    displayBox4.textContent=json.weather[0].main;

    let displayBox5=document.getElementById("min_max_temp");
    let temp_min=parseInt(json.main.temp_min-273.15)+'\u00B0c ';
    let temp_max=parseInt(json.main.temp_max-273.15)+'\u00B0c ';
    displayBox5.textContent=temp_min+"/"+temp_max;
}


// console.log('hi')
const APIkey = "063588d5aa9d61dd692da3158d186d6a" ;

const loadData = async(city) =>{
try {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)

    const data = await res.json();

    showData(data);
}
    catch (err) {

     console.log ("err:" + err) ;
    }
 
}






// show data 

const showData =(weather) => {

// console.log(weather)

if (Object.keys(weather).length === 2 ){

document.getElementById("warning").classList.remove('d-none')
document.getElementById("city-name").classList.add('d-none')
document.getElementById("temp").classList.add('d-none')
document.getElementById("weather-clouds").classList.add('d-none')



} else {

    document.getElementById("warning").classList.add('d-none')
    document.getElementById("city-name").classList.remove('d-none')
    document.getElementById("temp").classList.remove('d-none')
    document.getElementById("weather-clouds").classList.remove('d-none')
    

}



 setInnerTextByID("city-name", weather.name) ;
 setInnerTextByID("temperature", weather.main.temp) ;
 setInnerTextByID("weather-clouds", weather.weather[0].main) ;

}

// click search btn 

const search =()=>{

const input = document.getElementById('weather-input');

const inputValue = input.value;
loadData(inputValue);
input.value ='' ;

}




// commonFunction 

function setInnerTextByID (id,value){
            const  temperature = document.getElementById(id);
           temperature.innerText = value ;
           
}


// default call 
loadData('dhaka');
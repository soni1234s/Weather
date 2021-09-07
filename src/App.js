
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import A from './Components/A/A'
// import CollectUsers from './Components/Users/users'
// import Counter from './Components/Counter/counter'

import { useState } from 'react';
import axios from 'axios';
import Form from './Components/weather/form/form';
import WeatherInfo from './Components/weather/weatherInformation/weatherInfo'
function App() {

  

  const[state, setState] = useState({})
  
  const[flag, setFlag] = useState(false)

  const getDataFromServer = (city) => {
    
    console.log("city=>  ",city)
     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b3da57c379578395fd1043edab88e8a`).then((res) => {
  
        
     setState({
           
            temp: Math.round(res.data.main.temp - 273.15),
            weather: res.data.weather[0].main,
            name: res.data.name
          })    
     }).catch((err) => {
   
         setFlag(true)
         setState({})
        //  alert("Enter Correct Data!")
         console.log("error",err)
     })
  }
  return (
    <div className="App">
        
        <h2 className="text-white">Weather App</h2>
        <Form getDataFromServer={getDataFromServer}/>
              
       {!(Object.keys(state).length === 0)?<WeatherInfo info = {state}/>: (flag) ? <h2 className="mt-5 text-white">no result found :)</h2> : <h1></h1> } 



    </div>
  );
}

export default App;

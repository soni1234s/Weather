import React from "react";

const WeatherInfo = (props) => {
    
    //console.log(props)


    //const {pressure} = main

    //console.log(props.info.main.pressure)
    
    
      
      console.log(props.info.name)
      console.log(props.info.temp)
      console.log(props.info.weather)

   
    return (
        
        <div className="container mt-5">

           <div className="col-sm-12">

             <div className="card bg-dark">
                 {/* <div className="card-header"></div> */}
                 <div className="card-body ">
                    <table className="table text-white">
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Temperature</th>
                                <th>Weather</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr>
                                 <td>{props.info.name}</td>
                                 <td>{props.info.temp} &deg;c</td>
                                 <td>{props.info.weather}</td>
                             </tr>
                        </tbody>

                    </table>
                 </div>
             </div>
           </div>

        </div>
    )
}

export default WeatherInfo
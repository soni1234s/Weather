import React, {useState} from "react";

const Form = (props) => {
    
    const [city, setCity] = useState('')
    
    const sendData = () => {
                 
        props.getDataFromServer(city)
    }
    return (
        <div className="container mt-5">
           <div className="row" >
               <div className="col-sm-4"></div>

               <div className="col-sm-4">
                   <div className="form-group" style={{display: "flex"}}>
                   
                      <input type="text" 
                             className="form-control" 
                             placeholder="Enter City"
                             onChange = {(event) => {setCity(event.target.value)}}
                            />
                      <button className="btn btn-primary px-5 mx-3" onClick={sendData} type="submit">Search</button>
                  
                   </div>
               </div>

               <div className="col-sm-4"></div>
           </div>
        </div>
    )
}

export default Form
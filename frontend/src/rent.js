import React,{useState} from 'react';
import './rent.css';
import axios from 'axios';
import Rentform from './rentform'
// require('dotenv').config()


const Rent = ()=>
{
    const [auth , setauth] = useState("");
    const [authresponse , setauthresponse] = useState(false);

    const handleauth = () =>
    {
        axios.post(`${process.env.REACT_APP_URL}`+"/isUserAuth",{
            data : "nodata"
        }).then(async(response)=>
        {
            if(response.data.auth){
                setauthresponse(true)
            }else{
                setauthresponse(false)
                setauth("User login required to register the property")
            }
        });
    }
    return(
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='rentinfo'>
        <p>Provide all the necessary information about the property correctly, to reach out to the exact tenant</p>
        <input type="button" onClick={handleauth} value="Rent property" className='rentbtn'></input>
    </div>
    <span>{auth}</span>
    {authresponse && <Rentform/>}
    </>
    );
    
}

export default Rent;
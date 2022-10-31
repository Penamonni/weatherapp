
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Weather from './Weather';
import { isLoading } from 'react';
import bunny from "./disarabbit.png";

function App() {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setIsLoading(false)
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert("Your browser is much too primitive/stubborn to handle such sophisticated functions! 0_o")
    }

  }, [])
  if (isLoading) {
    return <p>Loading...</p>
  }

  else {

    return (
      <div>
        <div className='outerRim'>
          <h3>Thy position would bēon around hēr:</h3>
          <p>
            Position:&nbsp; {lat.toFixed(3)},
            {lng.toFixed(3)}
          </p>
          <br/>
          <div className='weatherRim'>
            <Weather lat={lat} lng={lng} />
          </div>
        </div>
        <img src={bunny} className="bunnyy" alt="kaniini" width="192" height="240"></img>
      </div>
      
    )
  }
}

export default App;

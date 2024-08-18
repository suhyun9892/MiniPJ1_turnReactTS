import { useEffect } from 'react'

export default function Weather() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)
  }, [])

  const success = (position: GeolocationPosition) => {
    // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    console.log('Latitude is :', position.coords.latitude)
  }

  const error = () => {
    console.log('Unable to retrieve your location')
  }

  return (
    <>
      <div></div>
    </>
  )
}

// import React, { useRef, useEffect } from 'react'
// import { useState } from 'react'
// import { getGreeting } from '../apiClient'

// const App = () => {
//   const [greeting, setGreeting] = useState('')
//   const [count, setCount] = useState(0)
//   const [isError, setIsError] = useState(false)

//   useEffect(() => {
//     getGreeting()
//       .then((greeting) => {
//         console.log(greeting)
//         setGreeting(greeting)
//         setIsError(false)
//       })
//       .catch((err) => {
//         console.log(err)
//         setIsError(true)
//       })
//   }, [count])

//   return (
//     <>
//       {count}
//       <h1>{greeting}</h1>
//       {isError && (
//         <p style={{ color: 'red' }}>
//           There was an error retrieving the greeting.
//         </p>
//       )}
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </>
//   )
// }

// export default App

import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import './App.css'

const REACT_APP_MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoia2F0aWVnZWUiLCJhIjoiY2xvcWNxbDhrMGhmbjJrbWM1ZWFtZHIzcCJ9.BNmn1eIG0EBZkXUr4SuxDQ'

mapboxgl.accessToken = REACT_APP_MAPBOX_ACCESS_TOKEN

const App = () => {
  const mapContainerRef = useRef(null)

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current ? mapContainerRef.current : 'map',
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    })

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    // clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />
}

export default App

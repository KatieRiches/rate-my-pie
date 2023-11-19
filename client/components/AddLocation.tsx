import mapboxgl, { Map, MapMouseEvent, Popup } from 'mapbox-gl'
import React from 'react'
import ReactDOM from 'react-dom'
import RatingForm from './RatingForm'

//store map markers
const markers: mapboxgl.Marker[] = []

// add click event listner to the map
const MapClickHandler = (map: Map) => {
  const iconElement = document.createElement('div')
  iconElement.className = 'custom-marker'
  iconElement.innerHTML = '🥧'

  const handleMapClick = (e: MapMouseEvent) => {
    const { lng, lat } = e.lngLat

    //Container for rating form
    const popupContent = document.createElement('div')

    // Render the rating form in the popup
    ReactDOM.render(<RatingForm />, popupContent)

    //create a mapGL popUp
    const popup = new Popup({ offset: 25 })
      .setDOMContent(popupContent)
      .setLngLat([lng, lat])
      .addTo(map)

    //create a mapGl marker
    const marker = new mapboxgl.Marker({ element: iconElement })
      .setLngLat([lng, lat])
      .addTo(map)

    // Close the popup when the marker is clicked
    marker.getElement().addEventListener('click', () => {
      popup.remove()
      marker.remove()
    })
    //store the marker in the arry
    markers.push(marker)
  }

  map.on('click', handleMapClick)
}

export default MapClickHandler

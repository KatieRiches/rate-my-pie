import { useState } from 'react'
import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import './App.css'
import MapClickHandler from './AddLocation'
import RatingForm from './RatingForm'

const REACT_APP_MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoia2F0aWVnZWUiLCJhIjoiY2xvcWNxbDhrMGhmbjJrbWM1ZWFtZHIzcCJ9.BNmn1eIG0EBZkXUr4SuxDQ'

mapboxgl.accessToken = REACT_APP_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const mapContainerRef = useRef(null)

  useEffect(() => {
    // Check if the Geolocation API is supported by the browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude
          const userLng = position.coords.longitude

          // initialize map with the user's current location
          const map = new mapboxgl.Map({
            container: mapContainerRef.current
              ? mapContainerRef.current
              : 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [userLng, userLat],
            zoom: 12.5,
          })
          MapClickHandler(map)
          // add navigation control
          map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

          //add a marker at users location
          new mapboxgl.Marker().setLngLat([userLng, userLat]).addTo(map)

          // add click event listner to the map
          map.on('click', (e) => {
            const { lng, lat } = e.lngLat

            //Creates the marker
            new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
          })
          // clean up on unmount
          return () => map.remove()
        },
        (error) => {
          console.error('Error getting current location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by your browser')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />
}

export default Map

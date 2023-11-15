import mapboxgl, { Map, MapMouseEvent } from 'mapbox-gl'

const MapClickHandler = (map: Map) => {
  const handleMapClick = (e: MapMouseEvent) => {
    const { lng, lat } = e.lngLat
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)
  }
  map.on('click', handleMapClick)
}

export default MapClickHandler

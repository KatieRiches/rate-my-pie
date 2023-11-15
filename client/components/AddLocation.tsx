import mapboxgl, { Map, MapMouseEvent } from 'mapbox-gl'

const markers: mapboxgl.Marker[] = []
const MapClickHandler = (map: Map) => {
  const iconElement = document.createElement('div')
  iconElement.className = 'custom-marker'
  iconElement.innerHTML = '🥧'

  const handleMapClick = (e: MapMouseEvent) => {
    const { lng, lat } = e.lngLat
    const marker = new mapboxgl.Marker({ element: iconElement })
      .setLngLat([lng, lat])
      .addTo(map)
    markers.push(marker)
  }
  map.on('click', handleMapClick)
}

export default MapClickHandler

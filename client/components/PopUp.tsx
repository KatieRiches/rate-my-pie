import { Popup, Marker } from 'mapbox-gl'

const Popup = ({ index, marker, closePopup }) => {
  return (
    <Popup
      latitude={marker.latitude}
      longitude={marker.longitude}
      onClose={closePopup}
      closeButton={true}
      closeOnClick={false}
      offsetTop={-30}
    >
      <p>marker.name</p>
    </Popup>
  )
}

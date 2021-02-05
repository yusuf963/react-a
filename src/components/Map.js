import React from 'react'
import ReactMapGL from 'react-map-gl'
import css from 'mapbox-gl/dist/mapbox-gl.css'


function Map() {
  const [viewport, setViewport] = React.useState({
    width: '88vw',
    height: '70vh',
    latitude: 51.5167,
    longitude: -0.05,
    zoom: 5
  })
  return (
    <>
      <div className="map-container" style={{ width: '93vw', height: '80vh', display: 'flex', justifyContent: 'center', borderRadius: '20px', margin: '100px auto 0 auto ', boxShadow: '0 5px 8px -2px black' }}>
        <ReactMapGL
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
          mapboxApiAccessToken={'pk.eyJ1IjoieXVzdWY5NjMiLCJhIjoiY2traTc5N2cxMWtscjJ3cXRycHVxbnM5ayJ9.ZyAS9QfUaYL-HexSX-UVDQ'}
        />
      </div>
    </>
  )
}

export default Map
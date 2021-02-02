import React from 'react'
import ReactMapGL from 'react-map-gl'
import css from 'mapbox-gl/dist/mapbox-gl.css'
import mapImg from '../asset/map.png'


function Map() {
  const [viewport, setViewport] = React.useState({
    width: '70vw',
    height: '70vh',
    latitude: 51.5167,
    longitude: -0.05,
    zoom: 5
  })
  return (
    <>
      <div style={{ width: '80vw', height: '70vh', display: 'flex', justifyContent: 'center', borderRadius: '20px', boxShadow: '0 8px 6px -6px black', margin: 'auto', marginTop: '70px' }}>
        {/* <img src={mapImg} alt='map' /> */}
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
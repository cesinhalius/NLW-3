import React from 'react';

import MapMarker from '../image/map-marker.svg';
import{Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/ophanages-map.css';

function OrphanagesMap(){
  return (
  <div id="page-map">
    <aside>
      <header>
        <img src={MapMarker} alt="happy"/>
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>

      <footer>
        <strong>Campinas</strong>
        <span>São Paulo</span>
      </footer>
    </aside>

    <Map center={[-22.8924342,-47.0678946]}
    zoom={15}
    style={{ width: '100%', height: '100%'}}
    >
        <TileLayer url=
        {`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN}`}/>
    </Map>
   <Link to="" className="create-ophanage">
     <FiPlus size={32} color="#fff"/>
   </Link>




  </div>
  )
}

export default OrphanagesMap;
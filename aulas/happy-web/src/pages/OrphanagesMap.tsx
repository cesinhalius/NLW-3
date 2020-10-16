import React,{useEffect, useState} from 'react';
import{Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import api from '../services/api';



import MapMarker from '../image/map-marker.svg';
import MapIcon from '../utils/MapIcon';



import '../styles/pages/ophanages-map.css';

interface Orphanage{
  id:number;
  latitude:number;
  longitude:number;
  name:string;
}


function OrphanagesMap(){
const [orphanages, setOrphanages] = useState<Orphanage[]>([]);


  useEffect(()=>{
    api.get('orphanages').then(resp =>{
       setOrphanages(resp.data);
    });
  },[]);





  return (
  <div id="page-map">
    <aside>
      <header>
        <Link to="/">
        <img src={MapMarker} alt="happy"/>
        </Link>
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

   
     {orphanages.map(orphanage =>{
           return( <Marker
            key={orphanage.id}
            icon={MapIcon}
            position={[orphanage.latitude,orphanage.longitude]}
            
            >
            <Popup closeButton={false} minWidth={248} maxWidth={248} className="map-popup">
            {orphanage.name}
            <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff"/>
            </Link>
          </Popup>
        </Marker>
      )
     })}

    </Map>
   <Link to="/orphanages/create" className="create-ophanage">
     <FiPlus size={32} color="#fff"/>
   </Link>




  </div>
  )
}

export default OrphanagesMap;
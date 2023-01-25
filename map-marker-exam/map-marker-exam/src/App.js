import logo from './logo.svg';
import './App.css';

import { useEffect, useRef } from 'react';


function App() {

  const { naver } = window;

  const locations = [
    { place:"건대입구역", lat: 37.539922, lng: 127.070609 },
    { place:"어린이대공원역", lat: 37.547263, lng: 127.074181 },
  ];

  var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 15
  });

  // var marker = new naver.maps.Marker({
  //   position: new naver.maps.LatLng(37.3595704, 127.105399),
  //   map: map
  // });
  
  for (var i = 0; i < locations.length; i++) {
    var marker = new naver.maps.Marker({
        map: map,
        title: locations[i].place,
        position: new naver.maps.LatLng(locations[i].lat, locations[i].lng),
    });
  }
  return (
    <div className="MapWithMarker" id="map" style={{ width: '500px', height: '500px' }} />
  );
}

export default App;

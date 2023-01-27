import logo from "./logo.svg";
import "./App.css";
import React, {useEffect, useState} from 'react';

// import { useEffect, useRef } from 'react';

function App() {

const { naver } = window;
const NaverMapEx1 = () => {
    useEffect(() => {
        const container = document.getElementById("map"); // 지도를 표시할 div
 
        // let markerList = [];
        // const HOME_PATH = window.HOME_PATH || '.';
        const position = new naver.maps.LatLng(37.3849483, 127.1229117);
        const mapOptions = {
            center: position,
            zoom: 17,
            minZoom: 6,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
 
        const map = new naver.maps.Map(container, mapOptions);
 
        const markerOptions = {
            position: position.destinationPoint(90, 15),
            map: map,
            icon: {
                url:'https://navermaps.github.io/maps.js/docs/img/example/ico_pin.jpg',
                //size: new naver.maps.Size(50, 52),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(25, 26)
            }
        };
 
        const marker = new naver.maps.Marker(markerOptions);
 
        console.log("loading navermap");
    },[]);

  // const mapElement = useRef(null)

  // const locations = [
  //   { place:"건대입구역", lat: 37.539922, lng: 127.070609 },
  //   { place:"어린이대공원역", lat: 37.547263, lng: 127.074181 },
  // ];

  // var map = new naver.maps.Map('map', {
  //   center: new naver.maps.LatLng(37.3595704, 127.105399),
  //   zoom: 15
  // });

  // // var marker = new naver.maps.Marker({
  // //   position: new naver.maps.LatLng(37.3595704, 127.105399),
  // //   map: map
  // // });

  // for (var i = 0; i < locations.length; i++) {
  //   var marker = new naver.maps.Marker({
  //       map: map,
  //       title: locations[i].place,
  //       position: new naver.maps.LatLng(locations[i].lat, locations[i].lng),
  //   });
  // }
  return (
    <div
      className="MapWithMarker"
      id="map"
      style={{ width: "500px", height: "500px" }}
    />
  );
}

export default App;

import React, { useState } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';

export const NaverMapAPI = (props) => {
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{ width: '100%', height: '100%'}}
      center={{ lat: props.Latitude, lng: props.Longtitude }}
      defaultZoom={12}
      zoom={props.zoom}
      minZoom={12}
      enableWheelZoom={false}
      >
        {props.zoom == 15 && (
          <Marker
            position={{ lat: props.Latitude, lng:props.Longtitude }}
            title={props.roadAddress}
            clickable={true}
          />
        )}
    </NaverMap>
  )
}

export default NaverMapAPI
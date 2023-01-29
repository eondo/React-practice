import React, { useState } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker, loadNavermapsScript } from 'react-naver-maps';


const NaverMapApi = (props) => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={ProcessingInstruction.env.REACT_APP_CLIENT_ID}
      submodules={['geocoder']}
    >
      
    </RenderAfterNavermapsLoaded>
  )
}
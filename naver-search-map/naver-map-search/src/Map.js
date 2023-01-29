import React from'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker, loadNavermapsScript } from 'react-naver-maps';


function NaverMapAPI(props) {
  // console.log('여기까지 옴', props)
  const navermaps = window.naver.maps;
  const otherLatLngs = [
    { lat: 37.6859, lng: 126.597865 },
    { lat: 37.68528, lng: 126.597227 },
    { lat: 37.685535, lng: 126.599528 },
    { lat: 37.684234, lng: 126.599292 },
  ];
  const searchPos = props.positions.positions
  // const searchPos = [
  //   { lat: 37.6859, lng: 126.597865 },
  //   { lat: 37.68528, lng: 126.597227 },
  //   { lat: 37.685535, lng: 126.599528 },
  //   { lat: 37.684234, lng: 126.599292 },
  // ];
  console.log('here', searchPos)
  // {otherLatLngs.map((markerItem) => {
  //   return (
  //     <Marker
  //       key={markerItem.id}
  //       position={
  //         new navermaps.LatLng(
  //           markerItem.lat,
  //           markerItem.lng
  //         )
  //       }
  //       animation={0}
  //       onClick={() => {
  //         alert('하이');
  //       }}
  //     />
  //   );
  // })}

  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '85vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={1}
        onClick={() => {alert('여기는 n서울타워');}}
      />
      
      {/* {otherLatLngs.map((markerItem) => {
    return (
      <Marker
        key={markerItem.id}
        position={
          new navermaps.LatLng(
            markerItem.lat,
            markerItem.lng
          )
        }
        animation={0}
        onClick={() => {
          alert('다중 마커를 클릭했습니다');
        }}
      />
    );
  })} */}

      {/* 검색 다중 마커들 */}
      {searchPos.map((searchItem) => {
        console.log('여기 왔니')
        return (
          <Marker
            key={searchItem.id}
            position={
              new navermaps.LatLng(
                searchItem.lat,
                searchItem.lng
              )
            }
            animation={0}
            onClick={() => {
              alert('검색 마커를 클릭했습니다');
            }}
          />
        );
      })}
    </NaverMap>
  );
}

function Map(props) {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'__'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI positions={props} />
    </RenderAfterNavermapsLoaded>
  );
}

export default Map;
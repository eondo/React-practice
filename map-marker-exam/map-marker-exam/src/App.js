import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import NaverMapAPI from './NaverMapApi';


function App() {
  const { naver } = window;

  // 주소 검색 함수에 넘겨줄 address 상태 관리
  const [address, setAddress] = useState("");
  const [roadAddress, setRoadAddress] = useState(null);

  // 변경 가능성이 있는 경도, 위도, zoom을 useState를 이용하여 상태 관리하기
  const [lat, setLat] = useState(37.54);
  const [lng, setLng] = useState(126.99);
  const [zoom, setZoom] = useState(12);

  // 주소 검색 시, 주소창의 change event를 감지한다.
  const handleChange = (e) => {
    const { address, value } = e.target;
    const newAddress = { address: value };
    setAddress(newAddress);
  };

  // 주소 타이핑 후 검색 버튼을 누르면 동작하는 함수
  function searchAddressToCoordnate(address) {
    // geocode에 입력받은 address를 query로써 전달
    console.log(address)
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        // 문제 발생할 경우
        if (status !== naver.maps.Service.Status.OK)
          console.log('문제')
          return alert("Something wrong!");

        // 제대로 된 query가 들어가 response가 return되는 경우
        var result = response.v2, // 검색 결과의 컨테이너
          items = result.addresses // 검색 결과의 배열
        
        const x = parseFloat(items[0].x); // 경도
        const y = parseFloat(items[0].y); // 위도

        setLat(y) // 위도 상태 변경
        setLng(x) // 경도 상태 변경
        setZoom(15);
        setRoadAddress(items[0].roadAddress); // 도로명 주소
      }
    );
  }

  return (
    <>
      <div className="map-loader">
        <div className="map" style={{ width: '100%', height: '100%' }}>
          <NaverMapAPI
            zoom={zoom}
            Latitude={lat}
            Longtitude={lng}
            roadAddress={roadAddress}
          />
        <div className="search-container">
          <form>
            <input
              className="findAddress"
              placeholder="주소로 검색"
              onChange={handleChange}
            />
            
            <button
              className="submitAddress-button"
              type="submit"
              onClick={() => searchAddressToCoordnate(address.address)}
            >
              검색!
            </button>
          </form>
        </div>
        </div>
      </div>
    </>
  )

  // const { naver } = window;

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
  // return (
  //   <div className="MapWithMarker" id="map" style={{ width: '500px', height: '500px' }} />
  // );
}

export default App;

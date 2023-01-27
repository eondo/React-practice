import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  // 1. 성공 ver. useEffect 사용해서 컴포넌트가 마운트 되었을 때 지도 표시
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = (naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  // const { naver } = window;
  // const location = new naver.maps.LatLng(37.5656, 126.9769);

  // const mapOptions = {
  //   center: location,
  //   zoom: 17,
  // };

  // const map = new naver.maps.Map('map', mapOptions);

  // const marker = new naver.maps.Marker({
  //   map,
  //   position: location,
  // });

  return (
    <div ref={mapElement} style={{ minHeight: "400px" }} />

    // <div className="Map" style={{ width: "500px", height: "500px" }} />

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>
  );
}

export default App;

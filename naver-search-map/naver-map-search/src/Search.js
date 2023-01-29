import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';
import { RecoilBoot } from 'recoil';
import { loadNavermapsScript, Marker } from 'react-naver-maps';


// class Search extends React.Component {
//   state = {
//     isLoading: true,
//     places: [],
//     value: ""
//   };
function Search(props) {

  const [state, setState] = useState({places: [], isLoading: false})
  const [value, setValue] = useState('')
  const [{ lat, lng }, setGeometricData] = useState({
    lat: 0,
    lng: 0,
  });
  const positions = [];

  // 지오코딩
  const geocoding = (address) => {
    const navermaps = window.naver.maps;
    

    navermaps.Service.geocode(
      {
        query: address
      },
      function (status, response) {
        if (status === navermaps.Service.Status.ERROR) {
          if (!address) {
            return alert('Geocode Error, Please check address');
          }
          return alert('Geocode Error, address:' + address);
        }

        if (response.v2.meta.totalCount === 0) {
          return alert('No result.');
        }
        let item = response.v2.addresses[0];
        setGeometricData({
          lng: item.x,
          lat: item.y,
        });
        console.log('컷')
        console.log(item.x, item.y)
        
        positions.push({ lat: item.x, lng: item.y })
        // setPositions([...positions, [item.x, item.y]])
        
        if (positions.length === 5) {
          console.log('내가 지금 확인할 positions', positions)
          props.setPos(positions)
        }
      },
      
    );
  };

  const getSearchPlace = async () => {
    const ID_KEY = process.env.REACT_APP_SEARCH_ID;
    const SECRET_KEY = process.env.REACT_APP_SEARCH_SECRET;
    const search = value;
    // const cors = require('cors')

    // App.use(cors());
    try {
      if (search === "") {
        this.setState({places: [], isLoading: false})
      } else {
        const {data: {
          items
        }} = await axios.get('/v1/search/local.json', {
          params: {
            query: search,
            display: 10
          },
          headers: {
            'X-Naver-Client-Id': ID_KEY,
            'X-Naver-Client-Secret': SECRET_KEY
          }
        });
        console.log('보내긴 성공', search)
        setState({places: items, isLoading: false});

      }
    } catch (error) {
      console.log('문제 발생', ID_KEY)
      console.log(error);
    }
  };

  // 훅
  useEffect(() => {
    console.log('값이 바뀌었다')
    console.log(state)
    state.places.map((placeItem) => {
      geocoding(placeItem.roadAddress)
    })
    // console.log('내가 지금 확인할 positions', positions)
    // console.log('끝!', positions)
  }, [state.places])

  // const componentDidMount = () => {
  //   console.log('안녕')
  //   getSearchPlace();
  // };

  useEffect(() => {
    console.log('positions 변화 감지')
    console.log(positions)
  }, positions)

  const handleChange = (e) => {
    console.log('체인지')
    setValue(e.target.value);
    console.log(value)
  };

  const handleSubmit = (e) => {
    console.log()
    e.preventDefault();
    getSearchPlace();
  };

  return (
      <section className="container">
      {
        state.isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>)
          : (<form onSubmit={handleSubmit}>
            <div>
              <div className="input_div">
                <h1>장소 검색</h1>
                <input className="input_search" type="text" value={value} onChange={handleChange} placeholder="장소를 검색하세요." />
              </div>
              <div className="places">
                {state.places.map(place => (
                  <div key={place.address}>
                    <p>{place.title}</p>
                    <p>{place.link}</p>
                    <p>{place.category}</p>
                    <p>{place.roadAddress}</p>
                    <p>{place.mapx}</p>
                    <p>{place.mapy}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </form>)
      }
    </section>
)}

export default Search;
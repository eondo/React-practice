import React from 'react';
import axios from 'axios';
import App from './App';

class Search extends React.Component {
  state = {
    isLoading: true,
    places: [],
    value: ""
  };

  getSearchPlace = async () => {
    const ID_KEY = process.env.REACT_APP_SEARCH_ID;
    const SECRET_KEY = process.env.REACT_APP_SEARCH_SECRET;
    const search = this.state.value;
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
        this.setState({places: items, isLoading: false});
      }
    } catch (error) {
      console.log('문제 발생', this.state.places)
      console.log(error);
    }
  };


  componentDidMount() {
    this.getSearchPlace();
  };

  handleChange = (e) => {
    this.setState({value: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getSearchPlace();
  };

  render() {
    const {places, isLoading} = this.state;

    return (<section className="container">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading...</span>
          </div>)
          : (<form onSubmit={this.handleSubmit}>
            <div>
              <div className="input_div">
                <h1>장소 검색</h1>
                <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="장소를 검색하세요." />
              </div>
              <div className="places">
                {places.map(place => (
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
    </section>);
  }
}

export default Search;
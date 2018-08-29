import React, { Component } from "react";
import ReactDOM from "react-dom";
import RatingPopup from "./RatingPopup";
import { cities } from "./dummyData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities
    };
  }

  render() {
    return (
      <div className="rating-scale">
        <h1 className="rating-scale-title">Natural Perils</h1>
        <div className="rating-scale-buttons">
          {this.state.cities.map(city =>
            RatingPopup(
              <button className="rating-scale-button" key={city.id}>
                {city.name}
              </button>,
              city.naturalPerils
            )
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

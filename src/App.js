import './App.css';
import Chefs from './Chefs';
import Cuisines from './Cuisines';
import FoodGuide from './FoodGuide';
import Varieties from './Varieties';

function App() {
  return (
      <div className="App">
          <h3 className="head"> Culinary Kitchen </h3>
          <hr />
          <h2 className="head"> VARIETIES </h2>
          <Varieties />
          <Cuisines />
          <h2 className="head"> TOP CHEFS </h2>
          <Chefs />
          <FoodGuide />
          <div className="socialicons">
              <button className="social"> <img alt="social" src={require("./images/facebook.jpg")}/> </button>
              <button className="social"> <img alt="social" src={require("./images/instagram.jpg")}/> </button>
              <button className="social"> <img alt="social" src={require("./images/twitter.png")}/> </button>
          </div>
      </div>
  );
}

export default App;

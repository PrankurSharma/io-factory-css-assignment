import "./FoodGuideStyle.css";
import { fooddata } from "./content/FoodGuideContent";

function FoodGuide() {
    return (
        <div className="guide">
            <h2 className="head"> FOOD GUIDE </h2>
            <div className="foodguide">
                <div className="subfood">
                    <div className="subdish">
                        <img alt="food" src={require('./images/vegetable.png')} />
                        <h2> {fooddata.vegetables.name} </h2>
                        <p> {fooddata.vegetables.des} </p>
                    </div>
                    <div className="subdish">
                        <img alt="food" src={require('./images/fruit.png')} />
                        <h2> {fooddata.fruits.name} </h2>
                        <p> {fooddata.fruits.des} </p>
                    </div>
                </div>
                <div className="subfood">
                    <img alt="food" className="subfooddish" src={require("./images/dish.png")} />
                </div>
                <div className="subfood">
                    <div className="subdish">
                        <img alt="food" src={require('./images/wholegrain.png')} />
                        <h2> {fooddata.multigrain.name} </h2>
                        <p> {fooddata.multigrain.des} </p>
                    </div>
                    <div className="subdish">
                        <img alt="food" src={require('./images/protein.png')} />
                        <h2> {fooddata.proteins.name} </h2>
                        <p> {fooddata.proteins.des} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodGuide;
import "./ChefsStyle.css";
import { chefdata } from "./content/ChefContent";

function Chefs() {
    return (
        <div className="chefs">
            <div className="subchef">
                <div className="chefdet">
                    <img alt="chef" src={require("./images/eileen.png")} />
                    <h3> {chefdata.eileen.name} </h3>
                    <p> {chefdata.eileen.des} </p>
                </div>
            </div>
            <div className="subchef">
                <div className="chefdet">
                    <img alt="chef" src={require("./images/robert.png")} />
                    <h3> {chefdata.robert.name} </h3>
                    <p> {chefdata.robert.des} </p>
                </div>
            </div>
            <div className="subchef">
                <div className="chefdet">
                    <img alt="chef" src={require("./images/amanda.png")} />
                    <h3> {chefdata.amanda.name} </h3>
                    <p> {chefdata.amanda.des} </p>
                </div>
            </div>
        </div>
    );
}

export default Chefs;
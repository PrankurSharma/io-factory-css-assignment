import "./CuisinesStyle.css";
import { cuisidata } from "./content/CuisinesContent";

function Cuisines() {
    return (
        <div className="cuisines">
            <div className="cuisinesub">
                <h1>
                    {cuisidata.indian.name}
                </h1>
                <p>
                    {cuisidata.indian.des}
                </p>
            </div>
            <div className="cuisinesub">
                <h1>
                    {cuisidata.american.name}
                </h1>
                <p>
                    {cuisidata.american.des}
                </p>
            </div>
            <div className="cuisinesub">
                <h1>
                    {cuisidata.chinese.name}
                </h1>
                <p>
                    {cuisidata.chinese.des}
                </p>
            </div>
        </div>
    );
}

export default Cuisines;
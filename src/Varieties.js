import "./VarietiesStyle.css";
import { vardata } from "./content/VarietiesContent";

function Varieties() {
    return (
        <div className="varieties">
            <div className="bigdiv1">
                <div className="bigsub">
                    <h1> {vardata.pizza.name} </h1>
                    <div className="dishinfo">
                        <h2> {vardata.pizza.des} </h2>
                        <hr />
                    </div>
                    <div className="exprate">
                        <button className="btn1"> Explore {">"} </button>
                        <button className="btn2"> Rate </button>
                    </div>
                </div>
            </div>
            <div className="bigdiv2">
                <div className="subdiv1">
                    <div className="smalldiv1">
                        <div className="smallsub">
                            <h2> {vardata.frenchfries.name} </h2>
                            <div className="dishinfo">
                                <p> {vardata.frenchfries.des} </p>
                                <hr />
                            </div>
                            <div className="exprate">
                                <button className="btn1"> Explore </button>
                                <button className="btn2"> Rate </button>
                            </div>
                        </div>
                    </div>
                    <div className="smalldiv2">
                        <div className="smallsub">
                            <h2> {vardata.paneertikka.name} </h2>
                            <div className="dishinfo">
                                <p> {vardata.paneertikka.des} </p>
                                <hr />
                            </div>
                            <div className="exprate">
                                <button className="btn1"> Explore </button>
                                <button className="btn2"> Rate </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subdiv2">
                    <div className="smalldiv3">
                        <div className="smallsub">
                            <h2> {vardata.macaroon.name} </h2>
                            <div className="dishinfo">
                                <p> {vardata.macaroon.des} </p>
                                <hr />
                            </div>
                            <div className="exprate">
                                <button className="btn1"> Explore </button>
                                <button className="btn2"> Rate </button>
                            </div>
                        </div>
                    </div>
                    <div className="smalldiv4">
                        <div className="smallsub">
                            <h2> {vardata.doughnut.name} </h2>
                            <div className="dishinfo">
                                <p> {vardata.doughnut.des} </p>
                                <hr />
                            </div>
                            <div className="exprate">
                                <button className="btn1"> Explore </button>
                                <button className="btn2"> Rate </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Varieties;
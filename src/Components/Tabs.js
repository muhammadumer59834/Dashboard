import React, { useState } from "react";
import Description from "./Summaryies/Description";
import Profile from "./Summaryies/Production";
import CoBrand from "./Summaryies/CoBrand";
function Tabs() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            <div className="contain">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item"> <a onClick={() => toggleTab(1)} className="nav-link active pointer" data-toggle="tab"><span className="hidden-sm-up">Description</span> <span className="hidden-xs-down">Description</span></a> </li>
                    <li className="nav-item"> <a onClick={() => toggleTab(2)} className="nav-link pointer" data-toggle="tab"><span className="hidden-sm-up">Profile</span> <span className="hidden-xs-down">Profile</span></a></li>
                    <li className="nav-item"> <a onClick={() => toggleTab(3)} className="nav-link pointer" data-toggle="tab" ><span className="hidden-sm-up">CoBrand</span> <span className="hidden-xs-down">CoBrand</span></a></li>
                    <li className="nav-item"> <a onClick={() => toggleTab(4)} className="nav-link pointer" data-toggle="tab"><span className="hidden-sm-up">Department</span> <span className="hidden-xs-down">Department</span></a></li>
                    <li className="nav-item"> <a onClick={() => toggleTab(5)} className="nav-link pointer" data-toggle="tab" ><span className="hidden-sm-up">Category</span> <span className="hidden-xs-down">Category</span></a></li>
                    <li className="nav-item"> <a onClick={() => toggleTab(6)} className="nav-link pointer" data-toggle="tab"><span className="hidden-sm-up">ProductionYear</span> <span className="hidden-xs-down">ProductionYear</span></a></li>
                    <li className="nav-item"> <a onClick={() => toggleTab(7)} className="nav-link pointer" data-toggle="tab" ><span className="hidden-sm-up">Top 10 Designs</span> <span className="hidden-xs-down">Top 10 Designs</span></a></li>
                </ul>
                <div className={toggleState === 1 ? "content-active" : "content-inactive"}>
                    <Description />
                </div>
                <div className={toggleState === 2 ? "content-active" : "content-inactive"}>
                    <Profile />
                </div>
                <div className={toggleState === 3 ? "content-active" : "content-inactive"}>
                    <CoBrand />
                </div>
            </div>
        </>
    )
}

export default Tabs
import React from 'react'
import './App.css';

import shirt from "./assets/t-shirt.svg";
import shirt1 from "./assets/color-B2C7C7.svg";
import shirt2 from "./assets/color-88C10F.svg";
import shirt3 from "./assets/color-FF1414.svg";
import shirt4 from "./assets/color-striped.svg";

const shirtColors = () => {
    return <div className="icons-container">
        <img src={shirt} className="icons first" alt="t-shirt"/>
        <img src={shirt1} className="icons" alt="T-shirt bleu"/>
        <img src={shirt2} className="icons" alt="T-shirt vert"/>
        <img src={shirt3} className="icons" alt="T-shirt rouge"/>
        <img src={shirt4} className="icons" alt="T-shirt rayé bleu"/>
    </div>
}
export default shirtColors;

import React from 'react'
import './App.css';

import skin from './assets/skin.svg';
import skin1 from './assets/color-FCD7B8.svg';
import skin2 from './assets/color-E0A39A.svg';
import skin3 from './assets/color-FCCC84.svg';
import skin4 from './assets/color-533724.svg';

const skinColors = () => {
    return <div className="icons-container">
        <img src={skin} className="icons first" alt=""/>
        <img src={skin1} className="icons" alt=""/>
        <img src={skin2} className="icons" alt=""/>
        <img src={skin3} className="icons" alt=""/>
        <img src={skin4} className="icons" alt=""/>
    </div>
}
export default skinColors;

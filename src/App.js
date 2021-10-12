import React from 'react'
import './App.css';

import malePhoto from './assets/man.svg';
import femalePhoto from './assets/woman.svg';

import SkinColors from './skinColors';
import ShirtColors from './shirtColors';

const App = () => {
    return <div className="main-container">
            <div className="profil-container">
                <div className="title">PROFIL</div>
                <div className="intern-container">
                    <div className="question">Lequel de ces deux avatars préférez-vous ?</div>
                    <div className="portrait-container">
                        <img
                            className="portraits"
                            src={malePhoto}
                            alt={`Portrait en dessin d'un homme`}
                        />
                        <img
                            className="portraits"
                            src={femalePhoto}
                            alt={`Portrait en dessin d'une femme`}
                        />
                    </div>
                    <hr/>
                        <SkinColors/>
                        <ShirtColors/>
                    <div className="submit-container">
                        <button className="submit-button">VALIDER</button>
                    </div>
                </div>
            </div>
        </div>
}
export default App;

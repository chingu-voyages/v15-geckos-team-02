import React from 'react';
import './FirstLetterFilter.css'

const FirstLetterFilter = props => {
    return (
        <div className="container">
            <h2 className="container__header">Browse Drinks</h2>
            <p className="container__firstLetters"><span>A</span>/<span>B</span>/<span>C</span>/<span>D</span>/<span>E</span>/
            <span>F</span>/<span>G</span>/<span>H</span>/<span>I</span>/<span>J</span>/
            <span>K</span>/<span>L</span>/<span>M</span>/<span>N</span>/<span>O</span>/
            <span>P</span>/<span>Q</span>/<span>R</span>/<span>S</span>/<span>T</span>/
            <span>U</span>/<span>V</span>/<span>W</span>/<span>X</span>/<span>Y</span>/<span>Z</span></p>
        </div>
    )
}

export default FirstLetterFilter;
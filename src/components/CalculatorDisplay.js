import React from 'react';

function CalculatorDisplay(props) {
    return (
        <div className="calculator-display">
            <p>{props.display}</p>
        </div>
    );
}

export default CalculatorDisplay;
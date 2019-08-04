import React from 'react';


const Validation = (props) => {

    let validationMessage = "Text long enough.";
    if (props.inputLength < 5){
        validationMessage = "Text too short.";
    } else if (props.inputLength > 30) {
        validationMessage = "Text too long.";
    }

    return (
        <div>
            {validationMessage}
        </div>
    );
};


export default Validation;
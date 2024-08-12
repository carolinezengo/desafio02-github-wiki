import React from "react";


import {InputContainer} from '../Input/styles'

 function Input({value, onChange}) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange}/>
        </InputContainer>
    )
}

export default Input
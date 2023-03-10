import React from 'react';

function InputForm(props: { type: string, name: string, placeholder: string, defaultValue: string | number | undefined }) {
    return (
        <>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
            />
            <label></label>
        </>
    )
}

export default InputForm;
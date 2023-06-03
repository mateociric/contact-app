function InputForm(props: { type: string, id: string, placeholder: string, defaultValue: string | undefined }) {
    return (
        <>
            <input
                type={props.type}
                id={props.id}
                name={props.id}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
            />
            <label></label>
        </>
    )
}

export default InputForm;
const Input = props => {
    const { helpText, label, minLength, name, onChange, placeholder, required, type, valid, value} = props
    const inputType = type? type:'text'
    const inputRequired = required? true:false

    return (
        <div className="form-floating mb-3">
            <input 
                className={`form-control${valid? '':' is-invalid'}`}
                id={label}
                minLength={minLength}
                name={name}
                onChange={onChange}
                placeholder={placeholder} 
                required={inputRequired}
                type={inputType}
                value={value}
            />
            <label htmlFor={label}>{label}</label>
            {helpText?
                <div className="form-text">{helpText}</div>
                :''
            }
        </div>
    )
}

export default Input
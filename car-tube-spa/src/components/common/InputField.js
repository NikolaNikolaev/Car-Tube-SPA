const InputField = ({ data, onChange, value }) => {
    let { type, id, name, placeholder, title, isRequired } = data;

    return (
        <div>
            <p>{title}</p>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                required={isRequired}
                onChange={onChange}
                value={value}
            />
        </div>
    )
};

export default InputField;
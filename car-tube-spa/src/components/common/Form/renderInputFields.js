import InputField from '../InputField';

function renderInputFields(inputFieldsData) {
    return Object.keys(inputFieldsData).map((key, index) => {
        let data = inputFieldsData[key];
        let value = this.props.form[key];
        let onChange = this.props.onChange;

        return <InputField
            data={data}
            onChange={onChange}
            value={value}
            key={index}
        />
    });
};

export default renderInputFields;
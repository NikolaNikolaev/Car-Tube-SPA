import { Link } from 'react-router-dom';
import renderInputFields from './renderInputFields';

function Form({ id, header, data, button, signSectionData }) {
    return (
        <div id={id}>
            <form onSubmit={this.props.onSubmit}>
                <div className="container">
                    <h1>{header}</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr />

                    {renderInputFields.call(this, data)}

                    <hr />
                    <button type="submit" className="registerbtn">{button}</button>
                </div>

                {/* Sign In/Up Redirect Section */}
                {signSectionData
                    ?
                    <div className="container signin">
                        <p>{signSectionData.text}
                            <Link to={signSectionData.endpoint}>{signSectionData.endpointName}</Link>.
                        </p>
                    </div>
                    : null
                }

            </form>
        </div>
    );
};

export default Form;

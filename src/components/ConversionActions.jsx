import React from 'react';
import types from '../actions';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setConversionType, setOutput, convert } from '../actions';

// UI
const CONVERSION_TYPES = [
    types.UPPER_CASE,
    types.LOWER_CASE,
    types.CAPITALIZE,
    types.CAMEL_CASE,
    types.UPPER_UNDERSCORE
]

class ConversionActions extends React.Component {

    handleButton(text) {
        this.props.setConversionType(text);
        const output = convert(text, this.props.input);
        this.props.setOutput(output);
    }

    render() {
        return (

            <div>
                {CONVERSION_TYPES.map((conversionType) => (
                    <button
                        key={conversionType}
                        className="btn btn-dark mr-2"
                        onClick={() => this.handleButton(conversionType)}>
                        {convert(conversionType, conversionType) }
                    </button>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    conversionType: state.conversionType
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ setConversionType , setOutput }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ConversionActions);
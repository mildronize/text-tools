import _ from 'lodash';

const types = {
    UPPER_CASE: 'UPPER_CASE',
    LOWER_CASE: 'LOWER_CASE',
    CAPITALIZE: 'CAPITALIZE',
    CAMEL_CASE: 'CAMEL_CASE',
    UPPER_UNDERSCORE: 'UPPER_UNDERSCORE',
    // ACTION
    SET_CONVERSION_TYPE: 'SET_CONVERSION_TYPE',
    SET_OUTPUT: 'SET_OUTPUT'
}

export default types;


// helper functions
export function convert(conversionType, text) {
    switch(conversionType){
        case types.UPPER_CASE:
            return _.upperCase(text);
        case types.LOWER_CASE:
            return _.lowerCase(text);
        case types.CAPITALIZE:
            return _.capitalize(text);
        case types.CAMEL_CASE:
            return _.camelCase(text);
        case types.UPPER_UNDERSCORE:
            return _.upperCase(text).replace(" ", "_");
        default:
            return text;
    }
}

export function setOutput(text) {
    return { 
        type: types.SET_OUTPUT,
        text
    };
}

export function setConversionType(text){
    return {
        type: types.SET_CONVERSION_TYPE,
        text
    };
}

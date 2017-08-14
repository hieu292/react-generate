import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({msg}) {
    return <div>Hello {msg}</div>
}

HelloWorld.propTypes = {
    msg: PropTypes.string
};
export default HelloWorld;
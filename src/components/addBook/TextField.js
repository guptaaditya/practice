import React from 'react'
import PropTypes from 'prop-types';

export default function TextField(props) {
    const optionalProps = { value: props.value };
    if (props.placeholder) optionalProps.placeholder = props.placeholder;
    if (props.onChange) optionalProps.onChange = props.onChange;

    return (
        <div className="form-group">
            <input className="form-control" type={props.type || 'text'} {...optionalProps} />
        </div>
    );
}
TextField.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
}
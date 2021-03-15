import React from 'react'
import PropTypes from 'prop-types';

export default class TextField extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.value !== this.props.value) return true;
        return false;
    }

    render() {
        const { props } = this;
        const optionalProps = { value: props.value };
        if (props.placeholder) optionalProps.placeholder = props.placeholder;
        if (props.onChange) optionalProps.onChange = props.onChange;
        return (
            <div className="form-group">
                <input className="form-control" type={props.type || 'text'} {...optionalProps} />
            </div>
        );
    }
}
TextField.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
}
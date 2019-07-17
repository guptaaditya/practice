import React, { Component } from 'react'
import PropTypes from 'prop-types';

const logger = (event) => console.log('From modal component', event)

export class FormModal extends Component {
  render(){
    return (
      <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" style={{ wdth: '75%' }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.onClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.actionHandler}>{this.props.actionText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

FormModal.propTypes = {
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

FormModal.defaultProps = {
  title: '',
  actionText: 'Save',
  actionHandler: logger,
  onClose: logger,
}

export default FormModal;

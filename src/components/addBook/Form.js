import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onAddBookSave, onAddBookClose, onEditBookSave, onEditBookClose } from '../../actions/book'

import FormModal from '../formModal/';
import TextField from './TextField';

class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.onBookSave = this.onBookSave.bind(this);
        this.state = props.editBook || {
            title: '',
            description: '',
            author: '',
            price: '',
            coverImage: '',
        };
    }

    onBookSave() {
        if (this.state.title && this.state.description && this.state.coverImage) {
            const saveFunction = this.state.id ? this.props.actions.onEditBookSave : this.props.actions.onAddBookSave;
            return saveFunction({ ...this.state });
        }
        window.alert('Please specify Book title, description, and cover image to save the book');
    }

    render() {
        const { props, state: { id } } = this;
        return (
            <div className="row">
                <FormModal title={id ? 'Edit book' : 'Add a book'} actionText='Save' onClose={this.state.id ? props.actions.onEditBookClose : props.actions.onAddBookClose} actionHandler={this.onBookSave}>
                    <TextField placeholder='Please enter book title' onChange={e => this.setState({ title: e.target.value })} value={this.state.title} />
                    <TextField placeholder='Please enter book description' onChange={e => this.setState({ description: e.target.value })} value={this.state.description} />
                    <TextField placeholder='Please enter author name' onChange={e => this.setState({ author: e.target.value })} value={this.state.author} />
                    <TextField placeholder='Please enter book price' onChange={e => this.setState({ price: e.target.value })} value={this.state.price} />
                    <TextField placeholder='Please enter cover image url' onChange={e => this.setState({ coverImage: e.target.value })} value={this.state.coverImage} />
                </FormModal>
            </div>
        );
    }
}

AddBook.propTypes = {
    actions: PropTypes.shape({
        onAddBookSave : PropTypes.func.isRequired,
        onAddBookClose : PropTypes.func.isRequired,
        onEditBookSave : PropTypes.func.isRequired,
        onEditBookClose : PropTypes.func.isRequired,
    })
};

const mapDispatchToProps = dispatch => { 
    return {
      actions: bindActionCreators({ onAddBookSave, onAddBookClose, onEditBookSave, onEditBookClose }, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(AddBook);

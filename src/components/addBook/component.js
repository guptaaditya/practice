import React from 'react'
import PropTypes from 'prop-types';
import FormModal from '../formModal/';
import TextField from '../textField';

export default class AddBook extends React.Component {
    constructor() {
        super();
        this.onBookSave = this.onBookSave.bind(this);
    }

    static getDerivedStateFromProps(props) {
        return props.editBook || {
            title: '',
            description: '',
            author: '',
            price: '',
            coverImage: '',
        };
    }

    onBookSave() {
        const { title, description, coverImage } = this.state;
        const { onEditBookSave, onAddBookSave } = this.props;
        if (title && description && coverImage) {
            const saveFunction = this.state.id ? onEditBookSave : onAddBookSave;
            return saveFunction({ ...this.state });
        }
        window.alert('Please specify Book title, description, and cover image to save the book');
    }

    render() {
        const { props: { onEditBookClose, onAddBookClose }, state: { id } } = this;
        return (
            <div className="row">
                <FormModal title={id ? 'Edit book' : 'Add a book'} actionText='Save' onClose={id ? onEditBookClose : onAddBookClose} actionHandler={this.onBookSave}>
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
    onAddBookSave : PropTypes.func.isRequired,
    onAddBookClose : PropTypes.func.isRequired,
    onEditBookSave : PropTypes.func.isRequired,
    onEditBookClose : PropTypes.func.isRequired,
};
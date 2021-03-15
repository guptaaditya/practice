import React from 'react'

export default class BookCard extends React.Component {
  state = {
    isSelected: false,
  }

  static getDerivedStateFromProps(props) {
    const { selected, book: { id } } = props;
    const isSelected = Boolean(selected.indexOf(id) > -1);
    return { isSelected };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.book.updatedAt !== nextProps.book.updatedAt) return true;
    else if (this.state.isSelected !== nextState.isSelected) return true;
    return false;
  }

  toggleSelect = () => {
    const { onUnselectBook, onSelectBook, book: { id } } = this.props;
    if (this.state.isSelected) {
      return onUnselectBook(id); //The card is alredy selected hence unselect it
    }
    return onSelectBook(id);
  };

  render() {
    const { book: { coverImage, title, author } = {} } = this.props;
    let containerClassName = `cardContainer`
    if (this.state.isSelected) containerClassName += ` cardSelected`;

    return (
      <div className={containerClassName} onClick={this.toggleSelect}>
        <div>
          <div className='cardCoverImageContainer'>
            <img className='cardCoverImage' alt="book cover" src={coverImage} />
          </div>
          <div className='titleCard'>
            <div>
              {title} 
              <br/> 
              <span>{author}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
import React from 'react'

export default class BookCard extends React.Component {

  toggleSelect = isCardSelected => {
    const { onUnselectBook, onSelectBook, id } = this.props;
    if (isCardSelected) {
      return onUnselectBook(id); //The card is alredy selected hence unselect it
    }
    return onSelectBook(id);
  };

  render() {
    const { book: { id, coverImage, title, author } = {}, selected } = this.props;
    const isCardSelected = Boolean(selected.indexOf(id) > -1);
    let containerClassName = `cardContainer`
    if (isCardSelected) containerClassName += ` cardSelected`;

    return (
      <div className={containerClassName} onClick={e => this.toggleSelect(isCardSelected)}>
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
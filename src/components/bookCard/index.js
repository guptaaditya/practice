import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { onSelectBook, onUnselectBook } from '../../actions/book'

export class BookCard extends Component {
  toggleSelect = (isCardSelected) => {
    if (isCardSelected) {
      return this.props.actions.onUnselectBook(this.props.id); //The card is alredy selected hence unselect it
    }
    return this.props.actions.onSelectBook(this.props.id);
  };

  render() {
    const isCardSelected = Boolean(this.props.selected.indexOf(this.props.id) > -1);
    const selectedStyle = isCardSelected ? selectedBookCard : {};
    return (
      <div style={{ ...bookCardStyle, ...selectedStyle }} onClick={e => this.toggleSelect(isCardSelected)}>
        <div>
          <div style={bookCovrContainerStyle}>
            <img alt="book cover" style={{width: "170px", height: "240px"}} src={this.props.image} />
          </div>
          <div style={authorTitleCard}>
            <div style={titleCardStyle}>
              {this.props.title} 
              <br/> 
              <span style={{fontSize:"10px"}}>
                {this.props.author}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
const mapStateToProps = ({ books: { selected } }) => ({ selected });
const mapDispatchToProps = dispatch => { 
  return {
    actions: bindActionCreators({ onSelectBook, onUnselectBook }, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BookCard);

const bookCardStyle = {
  position: "relative",
  display: "inline-block",
  marginBottom: "20px",
  marginRight: "20px",
  width: "170px", 
  height: "300px",
  cursor: "pointer"
};
const selectedBookCard = {
  backgroundColor: 'red',
};
const bookCovrContainerStyle = {
  width: "100%", 
  height: "240px",
  position: "relative"
};
const titleCardStyle = {
  fontSize: "12px", 
  fontWeight: "600", 
  overflow: "hidden", 
  textOverflow: "ellipsis",
  whiteSpace: "nowrap", 
};
const authorTitleCard = {
  display: "inline-block",
  paddingLeft: "10px",
  width: "100%", 
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 12px 0px"
};

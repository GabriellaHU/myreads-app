import React, { Component } from 'react'
import Selector from './Selector'


class Book extends Component {


  state = {
    shelf: 'none'
  }

  componentDidMount() {
    this.setShelf()
  }

  // sets the current state of the books
  // if the books already have a shelf property
  // or if the shelf property was set on the MainPage
  // otherwise none
  setShelf = () => {
    if (this.props.book.shelf) {
      this.setState({shelf: this.props.book.shelf})
    } else if (this.props.shelf) {
      this.setState({shelf: this.props.shelf})
    } else {
    this.setState({shelf: 'none'})
    }
  }

  //handles the Selector
  //only lets to select a new shelf
  //communicates with the BooksAPI
  // sets the new state based on the selected value
  handleChange = (event) => {

    if (this.props.book.shelf !== event.target.value) {
      // console.log(this.props.book);
      // console.log(this.state.shelf);
      // console.log(event.target.value);
      this.props.moveBook(this.props.book, event.target.value);
      this.setState({shelf: event.target.value})
    }

  }


  render() {

    //handles if there is no imageLink
    let thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''
    // this.props.moveBook(this, this.state)

    return (

      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${thumbnail}')` }}></div>
            <div className="book-shelf-changer">
              <Selector
                key='selector'
                book={this.props.book}
                handleChange={this.handleChange}
                setShelf={this.setShelf}
                shelf={this.props.book.shelf}
                newShelf={this.state.shelf}
              />
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>

    )
  }
}

export default Book

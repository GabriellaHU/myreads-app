import React, { Component } from 'react'
import Selector from './Selector'


class Book extends Component {


  state = {
    shelf: 'none'
  }

  handleChange = (event) => {
    // console.log(event)
    if (event.target.value !== this.state.shelf) {
      this.props.moveBook(this.props.book, event.target.value);
      this.setState({shelf: event.target.value})
    }
  }


  render() {

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

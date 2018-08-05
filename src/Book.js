import React, { Component } from 'react'

class Book extends Component {


  state = {
    shelf: 'none'
  }

  handleChange = (event) => {
    // console.log(event)
    if (event.target.value !== this.state) {
      this.props.moveBook(this.props.book, event.target.value)
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
            <select
              onChange={this.handleChange}
              value={this.props.book.shelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none" selected>None</option>
            </select>
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

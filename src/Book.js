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


    // this.props.moveBook(this, this.state)

    return (


    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={this.handleChange}

            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
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

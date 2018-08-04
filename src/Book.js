import React, { Component } from 'react'

class Book extends Component {


  state = {
    shelf: 'none'
  }

  handleChange = (event) => {
    if (event.target.value !== this.state) {
      this.setState({shelf: event.target.value});
      this.props.moveBook(this, event.target.value)
      console.log(event.target.value)
      console.log(this)
      console.log(this.state)
    }
  }



  render() {


    // this.props.moveBook(this, this.state)

    return (


    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select
              value={this.state.shelf}
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
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    </li>

    )
  }
}

export default Book

import React, { Component } from 'react'

class Selector extends Component {




  render () {

    return (
      <select
        onChange={this.props.handleChange}
        value={this.props.book.shelf}
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none" selected>None</option>
      </select>
    )
  }
}

export default Selector

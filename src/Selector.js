import React from 'react'

function Selector (props) {

    return (
      <select
        onChange={props.handleChange}
        value={props.newShelf}
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
}

export default Selector

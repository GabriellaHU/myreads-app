import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Book from './Book'

class BookSearch extends Component {

  state = {
    query: '',
    filteredBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.searchBooks(query)
    console.log(query)
  }

  searchBooks(query) {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
      console.log(books)
      this.setState({filteredBooks: books})
      })
    } else {
      this.setState({filteredBooks: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default BookSearch

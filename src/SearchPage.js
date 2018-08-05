import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Book from './Book'

class BookSearch extends Component {

  state = {
    query: '',
    filteredBooks: []
  }

  handleChange = (event) => {
    this.updateQuery(event.target.value)
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.searchBooks(query)
    // console.log(query)
  }

  searchBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
      // console.log(books)
      try { this.setState({filteredBooks: books})
      } catch (error) {
      // console.log(error)
      this.setState({filteredBooks: []})
    }
      })
    } else {
      this.setState({filteredBooks: []})
    }
  }

  render() {

    let filteredBooks = this.state.filteredBooks

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
              onChange={this.handleChange}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

           {
            (filteredBooks.length > 0 ) ? (filteredBooks.map(filteredBook => {

              let shelf = ''

              this.props.books.map(book => (
                book.id === filteredBook.id ?
                shelf = book.shelf : ''
              ))

              return (
                <Book
                  key={filteredBook.id}
                  book={filteredBook}
                  shelf ={shelf} 
                  moveBook={this.props.moveBook}
                />
              )
             }
           )) : 'Your search had no results.'

          }



          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch

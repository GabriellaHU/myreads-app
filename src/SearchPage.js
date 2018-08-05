import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import Book from './Book'


class BookSearch extends Component {

  state = {
    query: '',
    filteredBooks: []
  }

  // handles input in the searchbar
  handleChange = (event) => {
    this.updateQuery(event.target.value)
  }

  // binds the state to the input data
  // gets books from the BooksAPI
  updateQuery = (query) => {
    this.setState({ query })
    this.searchBooks(query)
    // console.log(query)
  }

  // if the input field is not empty, gets books from the BooksAPI
  // handles errors by setting the state of filteredBooks to an empty array
  searchBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        // console.log(books)
        try {
          this.setState({filteredBooks: books})
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
              // renders books to the SearchPage only if there are search results
              // otherwise renders a default message
              (filteredBooks.length > 0 ) ? (filteredBooks.map(filteredBook => {

                let shelf
                // compare book ID-s from the MainPage with ID-s from the SearchPage
                // set the latter's shelf value to the former's
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
            })) : 'Your search had no results.'
          }

          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch

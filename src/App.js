import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import Main from './MainPage'
import BookSearch from './SearchPage'
import './App.css'

class BooksApp extends Component {

  state = {

    books: [],
    readBooks: [],
    currentBooks: [],
    futureBooks: []

  }

   componentDidMount() {
     this.getBooks()

   }

  // loads books from the BooksAPI
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      this.setState({ readBooks: this.state.books.filter(book => book.shelf === 'read') });
      this.setState({ currentBooks: this.state.books.filter(book => book.shelf === 'currentlyReading') });
      this.setState({ futureBooks: this.state.books.filter(book => book.shelf === 'wantToRead') });


      // console.log(this.state.books)
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.getBooks()
  }

  render() {


    return (
      <div className="app">

        <Route path="/search" render={() => (
          <BookSearch />
        )}/>

        <Route path="/" exact render={() => (
          <Main
            books={this.state.books}
            moveBook={this.moveBook}
            readBooks={this.state.readBooks}
            currentBooks={this.state.currentBooks}
            futureBooks={this.state.futureBooks}
            />
        )}/>

     </div>
    )
  }
}

export default BooksApp

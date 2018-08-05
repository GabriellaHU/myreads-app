import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import Main from './MainPage'
import BookSearch from './SearchPage'
import './App.css'

class BooksApp extends Component {

  state = {

    books: [],

}

   componentDidMount() {
     this.getBooks()
   }

  // loads books from the BooksAPI
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });

      // console.log(this.state.books)
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
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
            readBooks={this.readBooks}
            currentBooks={this.currentBooks}
            futureBooks={this.futureBooks}

            />
        )}/>

     </div>
    )
  }
}

export default BooksApp

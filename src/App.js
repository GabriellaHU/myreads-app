import React, { Component } from 'react'
import Main from './MainPage'
import BookSearch from './SearchPage'
import { Route } from 'react-router-dom'

// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {

  }

  render() {
    return (
      <div className="app">

        <Route path="/search" render={() => (
          <BookSearch />
        )}/>

        <Route path="/" exact render={() => (
          <Main />
        )}/>

     </div>
    )
  }
}

export default BooksApp

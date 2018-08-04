import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './BookShelf'



class Main extends Component {


  render() {


    const shelfTypes = [
      { id: 'read',
        heading: 'Read'},
      { id: 'currentlyReading',
        heading: 'Currently Reading'},
      { id:  'wantToRead',
        heading: 'Want to Read'},
      ]

    return (


      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>


          {shelfTypes.map((shelf) => (

            <Shelf
              books={this.props.books}
              key={shelf.id}
              shelf={shelf.id}
              heading={shelf.heading}
              currentBooks={this.props.currentBooks}
              moveBook={this.props.moveBook}
            />
          )

        )}


          </div>
        </div>
        <div className="open-search">

          <Link
            to="/search"
          >Add a book</Link>

        </div>
      </div>

    )}
}

export default Main

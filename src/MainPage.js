import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'



class Main extends Component {

  state = {

  }


  render() {




    return (


      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {this.props.currentBooks.map((book) => (
                    <Book
                      books={this.props.books}
                      key={book.id}
                      id={book.id}
                      author={book.authors}
                      title={book.title}
                      thumbnail={book.imageLinks.thumbnail}
                      moveBook={this.props.moveBook}
                      />

                    )
                  )}

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {this.props.futureBooks.map((book) => (
                  <Book
                    books={this.props.books}
                    key={book.id}
                    id={book.id}
                    author={book.authors}
                    title={book.title}
                    thumbnail={book.imageLinks.thumbnail}
                    moveBook={this.props.moveBook}
                  />
                  )
                )}

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {this.props.readBooks.map((book) => (
                  <Book
                    books={this.props.books}
                    key={book.id}
                    id={book.id}
                    author={book.authors}
                    title={book.title}
                    thumbnail={book.imageLinks.thumbnail}
                    moveBook={this.props.moveBook}

                   />

                  )
                )}

                </ol>
              </div>
            </div>
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

import React, { Component } from 'react'

import Book from './Book'


class Shelf extends Component {


   render() {

     // takes the value of the rendered shelf from the MainPage
     // and sorts the searched books based on this value
     const shelfType = this.props.shelf;
     const filteredBooks = this.props.books.filter(book => book.shelf === shelfType);
     // console.log(filteredBooks)

     return(

       <div className="bookshelf">
         <h2 className="bookshelf-title">{this.props.heading}</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
           {
             filteredBooks.map(book => {
               return (
                 <Book
                   key={book.id}
                   book={book}
                   moveBook={this.props.moveBook}
                 />
               )

             })
           }
           </ol>
         </div>
        </div>

    )
  }
}


export default Shelf

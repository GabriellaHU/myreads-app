import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {



   render() {


     const shelf = this.props.shelf;
     const filteredBooks = this.props.books.filter(book => book.shelf === shelf);
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

               }
             )
           }


           </ol>
         </div>
        </div>

     )

   }


}


export default Shelf

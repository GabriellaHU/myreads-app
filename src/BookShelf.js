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

           {filteredBooks.map(book => (
               <Book
                 key={book.id}
                 id={book.id}
                 author={book.authors}
                 title={book.title}
                 thumbnail={book.imageLinks.thumbnail}
                 moveBook={this.props.moveBook}
                 shelf={this.props.type}
                 />

               )
             )}


           </ol>
         </div>
        </div>

     )

   }


}


export default Shelf

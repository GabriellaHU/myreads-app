05/08/2018

# MyReads APP

This project is a one page React application that displays a virtual library.
It allows the user to search and sort books. It runs with npm and communicates with a backend server API that contains all the books.

**App Features:**
 1. Main page:
   * sort books based on their state (read, currently reading or want to read) or
   * remove books from the list
 2. Search page:
   * search books based on author or title
   * sort books on state (read, currently reading or want to read)
The app also handles errors.


## Getting Started

   These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

   **Pre-requisites**: Install [git](https://gitforwindows.org/), [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) on your computer.

   1. Get a local copy of this repo by typing: `<git clone https://github.com/GabriellaHU/myreads-app.git>` to the terminal. (Or download the zip file and unzip it.)
   2. Enter the project folder in your terminal and run these to lines of code <`npm install`> and <`npm start`>
   3. Navigate to `localhost:3000` in your browser to explore the app. Review the files in your preferred code editor.


## Built With

   * HTML5
   * CSS
   * JS6
   * [React](https://reactjs.org/)
   * [Create React App](https://github.com/facebookincubator/create-react-app)
   * [React-Router](https://github.com/ReactTraining/react-router)

## Structure


```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js # This is the root of the app.
    ├── MainPage.js # This is the main page.
    ├── SearchPage.js # This is the search page.
    ├── BookShelf.js # This represents the shelf component on the main page.
    ├── Book.js # This is the Book component.
    ├── Selector.js # This component is the selector widget of the Book component.
    ├── MainPage.js # This is the main page
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the Udacity backend. Instructions for the methods are below.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
The purpose of this project was educational, thus pull requests will likely not be excepted.

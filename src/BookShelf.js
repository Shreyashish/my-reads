import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {
        const {name, books} = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">
                                        {book.authors.map((author, index) => (
                                            <div key={index}>{author}</div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf

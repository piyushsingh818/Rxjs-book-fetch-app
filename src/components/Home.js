import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
    const [searchBook, setSearchBook] = React.useState("");
    const books = useSelector((state) => state.bookReducer.show);
    const dispatch = useDispatch();
    const handleBookSearch = () => {
        if (searchBook) {
            dispatch({ type: 'FETCH', value: searchBook });
            setSearchBook("");
        }
    }
    return (
        <div>
            <h1>Search for Books</h1>
            <input className="search-input" type="text" onChange={(e) => setSearchBook(e.target.value)} value={searchBook} placeholder="e.g React Book"></input>
            <button className="search-btn" onClick={handleBookSearch}>Search</button>
            {books.map((items) =>
                <div>
                    <ul key={items.id}>
                        <li  >
                            <img src={`http://books.google.com/books/content?id=${items.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} /><br />
                            <span className="details">
                                <span className="title"><u>{items.volumeInfo.title}</u></span><br />

                                Author: {items.volumeInfo.authors}<br />
                                Publisher:  {items.volumeInfo.publisher}<br />
                                Pulished:{items.volumeInfo.publishedDate}<br />
                                <u> {items.volumeInfo.description}</u><br />
                            </span>
                            <button onClick={(e) => dispatch({
                                type: 'SAVE_BOOKS',
                                value: {
                                    id: items.id,
                                    title: items.volumeInfo.title,
                                    publisher: items.volumeInfo.publisher,
                                    publishedDate: items.volumeInfo.publishedDate,
                                    authors: items.volumeInfo.authors,
                                    description: items.volumeInfo.description,
                                }
                            })} className="save-btn">SAVE</button>
                        </li>
                    </ul>
                </div>
            )}


        </div >
    )
}

export default Home
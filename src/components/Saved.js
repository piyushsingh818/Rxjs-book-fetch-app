import React from 'react'
import { useSelector } from 'react-redux'

const Saved = () => {
    const itm = useSelector((state) => state.bookReducer.save)
    console.log(itm);
    return (
        <div>

            <div className="saved-items">

                {itm.map((it) => (
                    <div>
                        <ul key={it.id}>
                            <li>
                                <img src={`http://books.google.com/books/content?id=${it.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} /><br />

                                <span className="title" >Title: {it.title}</span><br />
                                {it.authors}<br />
                                {it.publisher}<br />
                                {it.publishedDate}<br />
                            </li>
                        </ul>
                    </div>
                )
                )}

            </div>
        </div>
    )
}

export default Saved
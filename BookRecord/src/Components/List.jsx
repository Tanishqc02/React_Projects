import React from 'react'
import { useState } from 'react';

const List = () => {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({title: '', author: '', genre: ''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const addBook = () => {
        if(!form.title || !form.author) return;
        setBooks([...books, form]);
        setForm({title: '', author: '', genre: ''});
    }
    return (
    <div>
        <h2>Book List</h2>
        <div>
            <input name='title' value={form.title} onChange={handleChange} placeholder='Book Title'  />
            <input name='author' value={form.author} onChange={handleChange} placeholder='Author'  />
            <input name='genre' value={form.genre} onChange={handleChange} placeholder='Genre'  />

            <button onClick={addBook}>Add Book</button>
        </div>

        <div className="border-t pt-4">
        {books.length === 0 ? (
            <p className="text-center text-gray-500 italic">
            No books added yet. Start building your library!
            </p>
        ) : (
            <ul className="space-y-2">
            {books.map((book, index) => (
                <li key={index} >
                <div>
                    <span >{book.title}</span>
                    <span >by {book.author}</span>
                </div>
                <span >
                    {book.genre}
                </span>
                </li>
            ))}
            </ul>
        )}
        </div>
    </div>
    )
}

export default List
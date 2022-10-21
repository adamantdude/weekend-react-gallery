import { useState } from "react";
import './GalleryForm.css';

function GalleryForm({newFN}) {

    const [url, setUrl] = useState('');
    const [description, setDesc] = useState('');

    const urlHandler = () => {
        newFN({url: url, description: description})
    }

    return (
        <form onSubmit={urlHandler}>
            <input 
                id="url"
                type="text"
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL here"
            />
            <input 
                id="desc"
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Describe your pic"
            />
            <button>Submit</button>
        </form>
    )
}

export default GalleryForm;
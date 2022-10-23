import { useState } from "react";
import './GalleryItem.css';

function GalleryItem({item, postFN, delFN}) {

    const [viewMode, setView] = useState(false);

    const viewHandler = () => {
        setView(!viewMode);
    }

    const likeHandler = () => {
        postFN(item.id);
    }

    const delHandler = () => {
        delFN(item.id)
    }

    return (
        <div className="oneItem">
                <div onClick={viewHandler} className="clickView">
                    { viewMode &&
                        <p>{item.description}</p>
                    }
                    { !viewMode &&
                        <img src={item.path} />
                    }
                </div>
            <div>
                <p>{item.likes} people love this!</p>
                <button onClick={likeHandler}>Like!</button>
                <button onClick={delHandler}>Delete</button>
            </div>
        </div>
    )
}

export default GalleryItem;
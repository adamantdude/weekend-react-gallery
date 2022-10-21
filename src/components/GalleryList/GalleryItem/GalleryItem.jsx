import { useState } from "react";
import './GalleryItem.css';

function GalleryItem({item, postFN}) {

    const [viewMode, setView] = useState(false);

    const viewHandler = () => {
        setView(!viewMode);
    }

    const likeHandler = () => {
        postFN(item.id);
    }

    return (
        <div className="oneItem">
            { viewMode &&
                <div onClick={viewHandler} className="clickView">
                    <p>{item.description}</p>
                </div>
            }
            { !viewMode &&
                <div onClick={viewHandler} className="clickView">
                    <img src={item.path} />
                </div>
            }
            <div>
                <p>{item.likes} people love this!</p>
                <button onClick={likeHandler}>Like!</button>
            </div>
        </div>
    )
}

export default GalleryItem;
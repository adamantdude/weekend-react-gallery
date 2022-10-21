import GalleryItem from "./GalleryItem/GalleryItem";
import './GalleryList.css';

function GalleryList({list, postFN}) {
    return (
        <div id="gallery">
            {list.map(x => <GalleryItem key={x.id} item={x} postFN={postFN}/>)}
        </div>
    )
}

export default GalleryList;
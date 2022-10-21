import GalleryItem from "./GalleryItem/GalleryItem";
import './GalleryList.css';

function GalleryList({list, postFN, delFN}) {
    return (
        <div id="gallery">
            {list.map(x => <GalleryItem key={x.id} item={x} postFN={postFN} delFN={delFN}/>)}
        </div>
    )
}

export default GalleryList;
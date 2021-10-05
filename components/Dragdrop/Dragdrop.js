import { useEffect, useState, useRef } from 'react'
import Dropbox from '../Dropbox/Dropbox';
import dragStyles from "../../styles/Drag.module.scss";

const Dragdrop = ({ upload }) => {

    const [dragging, setDragging] = useState(false);
    const dragRef = useRef(null);
    var counter = 0;

    // Event Handlers
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            upload(e.dataTransfer.files);
            e.dataTransfer.clearData();
            counter = 0;
        }
    }

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDragin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        counter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    }

    const handleDragout = (e) => {
        e.preventDefault();
        e.stopPropagation();
        counter--;
        if (counter === 0) {
            setDragging(false); 
        }
    }

    useEffect(() => {
        let div = dragRef.current;

        div.addEventListener('dragenter', handleDragin);
        div.addEventListener('dragleave', handleDragout);
        div.addEventListener('dragover', handleDrag);
        div.addEventListener('drop', handleDrop);

        return () => {
            div.removeEventListener('dragenter', handleDragin);
            div.removeEventListener('dragleave', handleDragout);
            div.removeEventListener('dragover', handleDrag);
            div.removeEventListener('drop', handleDrop);
        }
    })

    return (
        <div ref={dragRef} className={dragStyles.drag_drop} >
            {dragging && (<div className={dragStyles.fade}>Drop Here</div>)}
            <Dropbox />
        </div>
    )
}

export default Dragdrop;

import React from 'react'

const Bookmark = ({ status, onToggleBookmark, id }) => {
    return <button onClick={() => onToggleBookmark(id)}>
        <i className={'bi bi-bookmark' + (status ? '-heart-fill' : '')}></i>
    </button>

}

export default Bookmark
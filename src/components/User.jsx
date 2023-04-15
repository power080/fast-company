import React from 'react'
import Quality from './Quality'
import QualityList from './QualityList'
import Bookmark from './Bookmark'

const User = ({ _id, name, qualities, profession, completedMeetings, rate, bookmark, onDelete, onToggleBookmark }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {<QualityList qualities={qualities} />}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>{<Bookmark id={_id} onToggleBookmark={onToggleBookmark} status={bookmark} />}</td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className='btn btn-danger'
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

export default User
import React from "react";
import QualityList from "./QualityList";
import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToggleBookmark
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{<QualityList qualities={qualities} />}</td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
                {
                    <Bookmark
                        id={_id}
                        onToggleBookmark={onToggleBookmark}
                        status={bookmark}
                    />
                }
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default User;

import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, onItemSelect, selectedItem }) => {
    const isArray = Array.isArray(items);
    return (
        <ul className="list-group">
            {isArray
                ? items.map((item) => (
                    <li key={item[valueProperty]} className={"list-group-item" + (item === selectedItem ? " active" : "")} onClick={() => onItemSelect(item)} role="button">
                        {item[contentProperty]}
                    </li>
                ))
                : Object.keys(items).map((key) => (
                    <li key={items[key][valueProperty]} className={"list-group-item" + (items[key] === selectedItem ? " active" : "")} onClick={() => onItemSelect(items[key])} role="button">
                        {items[key][contentProperty]}
                    </li>
                ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;

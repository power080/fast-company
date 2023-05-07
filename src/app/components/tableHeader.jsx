import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
        } else {
            onSort({ path: item, order: "asc" });
        };
    };

    const renderSortArrow = column => {
        if (!selectedSort.path || selectedSort.path !== column.path) return null;
        if (selectedSort.order === "asc") return <i className="bi bi-caret-up-fill"></i>;
        return <i className="bi bi-caret-down-fill"></i>;
    };

    return (
        <thead>
            <tr>
                {Object.values(columns).map((column, index) => (
                    <th
                        key={column.path ? column.path + column.name : index}
                        onClick={column.path ? () => handleSort(column.path) : undefined}
                        {...{ role: column.path && "button" }}
                        scope="col"
                    >
                        {column.name}
                        {renderSortArrow(column)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;

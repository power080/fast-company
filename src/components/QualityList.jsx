import React from 'react'
import Quality from './Quality';
const QualityList = ({ qualities }) => {
    return qualities.map((item) => (
        <Quality key={item._id} {...item} />
    ));
}

export default QualityList
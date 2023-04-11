import React, { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user._id !== userId);
        setUsers(updatedUsers);
    };

    const renderPhrase = (number) => {
        switch (number) {
            case 0:
                return <span class='badge bg-danger'> Никто с тобой не тусанет </span>;
            case 2:
            case 3:
            case 4:
                return <span class='badge bg-primary'>{number} человека тусанет с тобой сегодня</span>;
            default:
                return <span class='badge bg-primary'>{number} человек тусанет с тобой сегодня</span>;
        }
    };

    return (
        <>
            <h1>{renderPhrase(users.length)}</h1>
            {users.length > 0 ? (
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Качество</th>
                            <th>Профессия</th>
                            <th>Встретился, раз</th>
                            <th>Оценка</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.qualities.map(quality => (
                                    <span key={quality._id} className={`badge bg-${quality.color}`}> {quality.name} </span>
                                ))}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Удалить</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                ' '
            )}
        </>
    );
};

export default Users;

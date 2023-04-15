import React, { useState } from 'react';
import api from './api';
import Users from './components/users';
import SearchStatus from './components/SearchStatus';
import { prev } from 'dom7';
const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookmark = (id) => {
        setUsers(prev => prev.map(user => user._id === id ? { ...user, bookmark: !user.bookmark } : user))
    };


    return (
        <div>
            <SearchStatus userCount={users.length} />
            <Users users={users} onDelete={handleDelete} onToggleBookmark={handleToggleBookmark} />
        </div>
    )
};

export default App
import { useEffect, useState } from 'react';

export function UsersList() {

    const [user, setUser] = useState('Marco');

    // componentDidiMount
    useEffect(() => {
        console.log('componentDidMount');
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('user', user);
    }, [user]);

    return (
        <div>
            <select value={user} onChange={e => setUser(e.target.value)}>
                <option>Marco</option>
                <option>Marcolino</option>
                <option>João</option>
                <option>António</option>
            </select>

            <p>Selected user: {user}</p>
        </div>
    )
}
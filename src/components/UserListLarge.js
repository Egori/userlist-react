import React, { useState, useEffect } from "react";
import { FixedSizeList as List } from "react-window";
import { fetchUsers } from "../api";

const UserListLarge = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            try {
                const data = await fetchUsers(page, 10000, search); // Загружаем блоки по 10000 пользователей
                setUsers(data);
            } catch (error) {
                console.error("Error loading users:", error);
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, [page, search]);

    const Row = ({ index, style }) => (
        <div style={style}>
            {users[index] ? users[index].id + " - " + users[index].name + " - " + users[index].email : "Loading..."}
        </div>
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <List
                    height={400}
                    itemCount={users.length}
                    itemSize={22}
                    width={500}
                >
                    {Row}
                </List>
            )}
            <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
                Previous
            </button>
            <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
    );
};

export default UserListLarge;
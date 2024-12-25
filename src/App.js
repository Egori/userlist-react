import React from "react";
import UserList from "./components/UserList";
import UserListLarge from "./components/UserListLarge";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="user-list-container">
          <h1>User List</h1>
          <UserList />
        </div>
        <div className="user-list-container">
          <h1>User List Large</h1>
          <UserListLarge />
        </div>
      </div>
    </div>
  );
}

export default App;

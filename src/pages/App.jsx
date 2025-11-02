import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { FirstApp } from "../components/FirstApp";
import { FetchSimpsonsApi } from "./FetchSimpsonsApi";

export function App() {
  const [user, setUser] = useState("");
  const [showTask, setShowtask] = useState("");
  // recibe el username desde el login
  const handleLogin = (username) => {
    setUser(username);
  };
  const handleLogout = () => {
    setUser("");
  };
  return (
    <div className="App">
      <div>
        <h1>Bienvenido</h1>
        <button onClick={() => setShowtask("task1")}>Tarea 1</button>
        <button onClick={() => setShowtask("task2")}>Tarea 2</button>
        <button onClick={() => setShowtask("task3")}>Tarea 3</button>
      </div>
      {showTask === "task1" ? <FirstApp /> : ""}

      {showTask === "task2" ? (
        <div>
          <h1>Esta es la tarea 2</h1>
          {user ? (
            // si se logeo
            <div>
              <h2>Hola de nuevo {user}</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            // si no se logeo
            <>
              <Login onLogin={handleLogin} />
              <Register />
            </>
          )}
        </div>
      ) : (
        <h1> </h1>
      )}

      {showTask === "task3" ? <FetchSimpsonsApi /> : <h1></h1>}
    </div>
  );
}

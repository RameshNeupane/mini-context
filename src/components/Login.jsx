import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            {"  "}
            <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            {"  "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Login;

import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

import "./App.css";

const App = () => {
    return (
        <UserContextProvider>
            <div className="center">
                <h1>React Context</h1>
                <Login />
                <Profile />
            </div>
        </UserContextProvider>
    );
};

export default App;

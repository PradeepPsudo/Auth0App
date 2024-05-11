import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './Authentication/LoginModule';
import Profile from './Authentication/UserProfileInfo';

function App() {
  const {user,isAuthenticated} = useAuth0();
  return (
    <div className="App">
      {!isAuthenticated && <LoginButton/>}
      {user && <Profile/>}
    </div>
  );
}

export default App;

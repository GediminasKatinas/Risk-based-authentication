import logo from './logo.svg';
import './App.css';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
import UserProfile from './components/userProfile';
function App() {
  return (
    <div className="App">
     <LoginButton/>
     <LogoutButton/>
     <p>user information is below</p>
     <UserProfile/>
    </div>
  );
}

export default App;

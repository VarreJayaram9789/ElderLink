import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";
import RegistrationPage from "./pages/register/Register";
import LoginPage from "./pages/login/Login";
const mongoose=require("mongoose");




function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
            <Route index element={<Home />} />
            <Route path="profile">
              <Route path=":userId" element={<Profile />} />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

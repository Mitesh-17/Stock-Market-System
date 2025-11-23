import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Login from "./MainPage/Login";
import Registration from "./MainPage/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stock-app" element={<MainPage />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signIn" element = {<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

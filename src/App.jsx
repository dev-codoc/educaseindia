import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-[375px] min-h-screen bg-gray-100">

          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}
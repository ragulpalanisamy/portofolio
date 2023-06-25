import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import MenuPage from "../routes/MenuPage"
import CookUserPage from "../routes/CookUserPage";
import UserPage from "../routes/UserPage";

export default function MainLayout() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/registracucina" element={<CookUserPage/>}/>
        <Route path="/registrautente" element={<UserPage/>}/>
      </Routes>
    </main>
  );
}

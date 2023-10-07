import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import MenuPage from "../routes/MenuPage"
import ManageUsersPage from "../routes/ManageUsersPage";

export default function MainLayout() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/utenti" element={<ManageUsersPage/>}/>
      </Routes>
    </main>
  );
}

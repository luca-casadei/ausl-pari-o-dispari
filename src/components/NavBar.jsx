import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="p-6 bg-slate-200">
            <NavLink to="/utenti">Utenti</NavLink>
            <NavLink to="/menu">Menu</NavLink>
        </nav>
    )
}
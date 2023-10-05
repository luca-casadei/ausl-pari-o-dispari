import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <NavLink to="/utenti">Utenti</NavLink>
            <NavLink to="/menu">Menu</NavLink>
        </nav>
    )
}
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="bg-slate-200 p-5">
            <NavLink className="ml-3 hover:bg-slate-300 p-3 rounded-md" to="/menu">Menu</NavLink>
            <NavLink className="hover:bg-slate-300 p-3 rounded-md" to="/registracucina">Registra utente cucina</NavLink>
            <NavLink className="ml-3 hover:bg-slate-300 p-3 rounded-md" to="/registrautente">Registra usufruente</NavLink>
        </nav>
    )
}
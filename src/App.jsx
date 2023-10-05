import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import LoginPage from "./routes/LoginPage"
import MenuPage from "./routes/MenuPage"
import NotFoundPage from "./routes/NotFoundPage"
import { useState } from "react"
import config from "./config/config.json"

function App() {

  const [token, setToken] = useState();

  async function handleLogin(username,password){
    const response = await fetch(config.addresses.publicapi + "/auslogin", {
      method: "POST",
      mode: config.corsmodes.public,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: username,
        password: password,
      })
    });
    switch(response.status){
      case 502:{
        alert("Errore interno, database non raggiungibile.");
        break;
      }
      case 404:{
        alert("Utente non trovato");
        break;
      }
      case 400:{
        alert("Credenziali invalide");
        break;
      }
      case 200:{
        response.json().then((parsedObject) =>{
          setToken(parsedObject.token);
        })
        break; 
      }
      default:{
        alert("Errore non gestito.");
        break;
      }
    }
  }

  return (
    <main>
      <NavBar/>
      <Routes>
        <Route index element={<LoginPage handleLogin={handleLogin}/>}/>
        <Route path="login" element={<LoginPage handleLogin={handleLogin}/>}/>
        <Route path="menu" element={<MenuPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </main>
  )
}

export default App

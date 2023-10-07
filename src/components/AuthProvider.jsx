import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config/config.json"

const AuthenticationContext = createContext(null);
export {AuthenticationContext};

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [username,setUsername] = useState(null);

  const passedParams = {
    token: token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    setContext: setContext,
    username: username
  }

  async function setContext(username, token){
    await setToken(token);
    await setUsername(username);
  }

  async function handleLogout() {
    await setToken(null);
  }
 

  async function handleLogin(username, password) {
    const response = await fetch(config.addresses.publicapi + "/auslogin", {
      method: "POST",
      mode: config.corsmodes.public,
      headers: {
        "Content-Type": config.corsmodes.urlencoded
      },
      body: new URLSearchParams({
        email: username,
        password: password,
      }),
    });
    switch (response.status) {
      case 502: {
        alert("Errore interno, database non raggiungibile.");
        break;
      }
      case 404: {
        alert("Utente non trovato");
        break;
      }
      case 400: {
        alert("Credenziali invalide");
        break;
      }
      case 200: {
        response.json().then((parsedObject) => {
          setToken(parsedObject.token);
          setUsername(username);
          localStorage.setItem("token", parsedObject.token);
          localStorage.setItem("email",parsedObject.email);
          navigate("/menu")
        });
        break;
      }
      default: {
        alert("Errore non gestito.");
        break;
      }
    }
  }

  return(
    <AuthenticationContext.Provider value={passedParams}>
        {children}
    </AuthenticationContext.Provider>
  )
}

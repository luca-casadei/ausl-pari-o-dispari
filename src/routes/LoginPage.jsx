import { useState } from "react";

import logo from "../assets/logo.png";
import config from "../config/config.json"

export default function LoginPage({handleLogin}) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleUsernameChange(e) {
    await setUsername(e.target.value);
  }

  async function handlePasswordChange(e) {
    await setPassword(e.target.value);
  }

  async function handleSubmit(e){
    e.preventDefault();
    document.getElementById("submitButton").disabled = true;
    await handleLogin(username,password);
    document.getElementById("submitButton").disabled = false;
  }

  return (
    <div className="flex flex-col p-6 w-screen h-screen items-center">
      <div className="rounded-md my-auto md:w-1/2 p-10 bg-orange-50">
        <div className="flex grow flex-col items-center">
          <img
            src={logo}
            width={150}
            height={150}
            className=""
            alt="LogoPariODispari"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:w-5/6 items-center"
          >
            <h1 className="font-bold text-xl">Pari o Dispari</h1>
            <h1>Portale AUSL</h1>
            <div className="flex w-full flex-col mt-6">
              <label className="text-lg text-orange-500">Email:</label>
              <input
                required
                className="p-3 outline-orange-400 rounded-lg"
                id="emailField"
                type="email"
                placeholder="esempio@dominio.it"
                onChange={handleUsernameChange}
              />
            </div>
            <div className="flex w-full flex-col mt-3">
              <label className="text-lg text-orange-500">Password:</label>
              <input
                required
                maxLength={config.inputs.MAX_PASSWORD_CHARACTERS}
                className="p-3 rounded-lg outline-orange-400"
                id="passwordField"
                type="password"
                placeholder="Massimo 20 caratteri"
                onChange={handlePasswordChange}
              />
            </div>
            <input
              value={"Accedi"}
              className="focus:bg-orange-100 rounded-lg text-white m-3 p-3 bg-orange-400"
              type="submit"
              id="submitButton"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { AuthenticationContext } from "../components/AuthProvider";
import config from "../config/config.json";

export function useAuthContext() {
  return useContext(AuthenticationContext);
}

export function isTokenValid(username, token) {
  //Il token è valido?
  return fetch(config.addresses.publicapi + "/auth", {
    method: "POST",
    mode: config.corsmodes.public,
    headers: {
      "Content-Type": config.corsmodes.urlencoded,
    },
    body: new URLSearchParams({
      token: token,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseBody) => {
      let result = responseBody.valid && username === responseBody.username;
      if (!result) {
        localStorage.setItem("token", "");
        localStorage.setItem("email", "");
      }
      return result;
    });
}

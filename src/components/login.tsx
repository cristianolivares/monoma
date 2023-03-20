import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
import userspass from "../utils/users.json";

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ setUser, setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const users: Record<string, string> = userspass;
    if (users[username] === password) {
      const token = uuidv4();
      sessionStorage.setItem("user", username);
      sessionStorage.setItem("token", token);
      setUser(username);
      setToken(token);

      navigate("/");
    } else {
      swal("Credenciales inválidas");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-semibold text-gray-700 mb-6 text-xl">
            Iniciar sesión
          </div>
          <form onSubmit={handleLogin}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Usuario
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Ingrese su usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <br />
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-red-500 text-xs italic mt-2">
                  Ingrese una contraseña valida.
                </p>
              </div>
              <br />
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 MONOMA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;

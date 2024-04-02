// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { URL } from "../api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/action";
const { useState } = require("react");

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const payload = { email, password };
      dispatch(login(payload)).then((res) => {
        console.log(res);
        toast(res.payload.message);
        navigate("/");
      });
      //   console.log(payload);
      //   axios.post(`${URL}auth/login`, payload).then((response) => {
      //     console.log(response);
      //     setEmail("");
      //     setPassword("");
      //     localStorage.setItem("token", response.data.token);
      //     toast(response.data.message);
      //   });
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field p-4 rounded-md mb-2 w-[95%]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field p-4 rounded-md mb-2 w-[95%]"
        />
        <button type="submit" className="bg-blue-400 px-4 py-2 rounded-md mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from "../api";
const { useState } = require("react");
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // Store avatar image URL here

  const handleRegister = () => {
    if (email && password && name && avatar) {
      const payload = {
        email,
        password,
        username: name,
        avatar,
      };
      console.log(payload);
      axios.post(`${URL}/auth/register`, payload).then((response) => {
        console.log(response);
        setEmail("");
        setName("");
        setPassword("");
        setAvatar("");
        toast(response.data.message)
      });
    }
  };

  const handleAvatarSelect = (avatarUrl) => {
    setAvatar(avatarUrl);
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field p-4 rounded-md mb-2 w-[95%]"
      />
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
      <label htmlFor="avatar" className="text-slate-600 font-semibold">Select your profile avatar :</label>
      <div id="avatar" className="flex flex-wrap items-center -mx-1 mt-2">
        {dummyAvatars?.map((avatarUrl, index) => (
          <img
            key={index}
            src={avatarUrl}
            alt={`Avatar ${index}`}
            className="w-12 h-12 mx-1 mb-2 cursor-pointer rounded-full"
            onClick={() => handleAvatarSelect(avatarUrl)}
          />
        ))}
      </div>
      <button
        onClick={handleRegister}
        className="bg-blue-400 px-4 py-2 rounded-md mt-4 "
      >
        Register
      </button>
    </div>
  );
};
export default RegistrationForm;

const dummyAvatars = [
  "https://robohash.org/I69.png?set=set2&size=150x150",
  "https://robohash.org/KJW.png?set=set2&size=150x150",
  "https://robohash.org/QF1.png?set=set2&size=150x150",
  "https://robohash.org/307.png?set=set2&size=150x150",
  "https://robohash.org/4J6.png?set=set2&size=150x150",
  "https://robohash.org/LR7.png?set=set2&size=150x150",
];
// const dummyAvatars = [
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/150",
//   "https://via.placeholder.com/150",
// ];

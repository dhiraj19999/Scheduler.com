import axios from "axios";

export const loginData = () => {
  return axios.get(`https://mock-server-kkz2.onrender.com/login2`);
};


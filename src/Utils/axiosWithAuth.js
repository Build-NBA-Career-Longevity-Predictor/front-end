import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://nbapredictor-backend.herokuapp.com/",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

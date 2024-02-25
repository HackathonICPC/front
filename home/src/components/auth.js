import axios from "axios";
import React, { useContext } from 'react';

import {API_URL} from '../constant'

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  const useUrl = 'http://127.0.0.1:8000/api/signin'
  console.log(useUrl)
  // axios.post(`http://127.0.0.1:8000/api/signup`);
  return axios
    .post(useUrl)
    .then((response) => {
      console.log(response.data)
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
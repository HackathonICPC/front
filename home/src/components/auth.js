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
  async function getProfileID(){
    let username = 'e'
    let password = 'c'
    const response =  await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/signin',
       params: {"username": username, "password": password}
    })
    localStorage.setItem("user", JSON.stringify(response.data));
    //axios.get(IP_ADRESS)
    //.then((response) =>{ console.log(response.status)})
  }
  getProfileID()
  /*
  let username = 'e'
    let password = 'c'
    const response =  await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/signin',
      params: {"username": username, "password": password}
    })
  */
  // axios.post(`http://127.0.0.1:8000/api/signup`);
  
  //console.log(username, password)
  
  // return axios
  //   .post({
  //     method: 'post',
  //     url: 'http://127.0.0.1:8000/api/signin',
  //     params: {"username": username, "password": password},
  //   })
  //   .then((response) => {
  //     //console.log(response.data)
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //     return response.data;
  //   });
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
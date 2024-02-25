import axios from "axios";
import React, { useContext } from 'react';

import {API_URL} from '../constant'

const register = (username, name, password) => {
  async function signUp(){
    const response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/signup',
      params: {"username": username, "name" : name, "password": password}
    })
  }
  signUp()
};

const login = (username, password) => {
  async function getProfileID(){
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
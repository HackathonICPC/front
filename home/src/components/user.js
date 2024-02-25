import React from 'react';
import axios from "axios";
import AuthService from "./auth";
const API_URL = 'http://127.0.0.1:8000/api/'

const getID = () =>{
  return AuthService.getCurrentUser()
}

// Получаем ник пользователя
const getName = () =>{
  if (getID() != null){
    const id = Number(getID())
    async function hz(){
      const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/getName',
        params: {"id": id}
      })
      return response
    }
    return hz()
  }
  else{
    return null
  }
}

const getMyCourses = () =>{
  if (getID() != null){
  const id = AuthService.getCurrentUser()
  async function hz(){
    const response = await axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/getMyCourses',
      params: {"id": id}
    })
    return response.data
  }
    return hz()
  }
  else{
    return null
  }

}

const getAllCourses = () =>{
  async function hz(){
    const response = await axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/getAllCourses',
    })
    return response.data
  }
  return hz()
}


const UserService = {
  getID,
  getName,
  getMyCourses,
  getAllCourses
}

export default UserService;
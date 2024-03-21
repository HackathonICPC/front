import React from 'react';
import {Link, redirect} from 'react-router-dom'
import AuthService from "../components/auth";
import UserService from '../components/user';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// TODO: Сделать красивую кнопку выхода из профиля
export default function UserProfile() {
  const navigate = useNavigate();
  const handleLogout = (e) =>{
    e.preventDefault()
    AuthService.logout()
    navigate('/')
    navigate(0)
  } 
  const id = UserService.getID()
  const [name, setName] = useState('username')
  useEffect(() => {
      if(id != null){
        UserService.getName().then((response) => {setName(response.data)})
      }
  })
  return (
    <>
    <div className="pagetitle">
      <h1>My profile</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active">My profile</li>
        </ol>
      </nav>
    </div>

    <div className="container p-0">
      <div className="row">
        <div className="col-md-7 col-xl-8">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="account" role="tabpanel">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Profile</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label for="inputUsername">Username</label>
                                    <input type="text" class="form-control" id="inputUsername" placeholder={name}/>
                                </div>
                                
                            </div>
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label for="inputUsername">Password</label>
                                    <input type="text" class="form-control" id="inputUsername" placeholder="Username"/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="text-center">
                                    <img src="/assets/img/sour_soup.jpg" class="rounded-circle img-responsive mt-2" width="128" height="128"/>
                                    <div class="mt-2">
                                        <span class="btn btn-primary"><i class="fa fa-upload">Выберете файл</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                        <button class="btn btn-primary" onClick={handleLogout} >Logout</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

import React from 'react';
import {Link} from 'react-router-dom'

export default function UserProfile() {
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
                                    <input type="text" class="form-control" id="inputUsername" placeholder="Username"/>
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
                                        <span class="btn btn-primary"><i class="fa fa-upload"></i></span>
                                    </div>
                                    <small>For best results, use an image at least 128px by 128px in .jpg format</small>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                  </form>
                </div>
              </div>

            </div>

            <div className="tab-pane fade" id="password" role="tabpanel">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Password</h5>
                  <form>
                    {/* Вставьте вашу форму здесь */}
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

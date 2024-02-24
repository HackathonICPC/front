import React from "react";
import { Link } from "react-router-dom"
import Card from "../components/Card";

export default function Courses() {
return (
    <div>
        <div className="pagetitle">
            <h1>Courses</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active">Courses</li>
                    </ol>
                </nav>
        </div>

        <section className="section dashboard">
        <div className="row">

        <div className="col-lg-8">
          <div className="row">
                {[1, 2, 3, 4, 5].map((id) => (
                    <Card img='https://i.pinimg.com/originals/f6/d2/90/f6d290a15e776e6631873f061918bcc5.gif'
                        title={`Course ${id}`}
                        text="АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА"
                        link={`/courses/${id}`}
                    />
                ))}
          </div>
        </div>
        
        <div className="col-lg-4 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>

              <div className="activity">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="activity-item d-flex">
                    <div className="activite-label">32 min</div>
                    <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                    <div className="activity-content">
                      Uploaded task {index}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
    </div>
);
}
import React from "react";
import { Link } from "react-router-dom"
import Card from "../components/GradeCard";


const imgs = ["https://i.pinimg.com/originals/bf/1b/14/bf1b14f9d3dbb892411d1323f4b3198e.gif",
'https://i.pinimg.com/originals/a8/02/2f/a8022ff27f7fafc4bcfa6436ed99a494.gif',
  "https://cdn.lowgif.com/full/1fcd4701a6e1d05b-.gif",
  "https://i.pinimg.com/originals/62/a3/0c/62a30c5d65b6cd0d00b9d6e0e1364f55.gif",
  "https://66.media.tumblr.com/a57d8b5994cfc711c4069f55e81fdb7d/tumblr_p2co6eCmHi1wsge6to5_500.gif",
  
  ]

export default function Grades(props) {
return (
    <div>
        <div className="pagetitle">
            <h1>Grade Homework</h1>
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
                    <Card img={imgs[id-1]}
                        title={`Student ${id}`}
                        text="Student Comments"
                        // link={`/courses/${id}`}
                        tag='Group 251'
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
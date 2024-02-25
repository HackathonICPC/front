import React from "react";
import { Link, useParams } from "react-router-dom";

import Card from "../components/Card";

const imgs = ['https://i.pinimg.com/originals/f6/d2/90/f6d290a15e776e6631873f061918bcc5.gif',
  "https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif",
  "https://i.pinimg.com/originals/cc/cc/04/cccc04f856af5a5dba7c5fca2e73f982.gif",
  "https://i.pinimg.com/originals/c0/5b/44/c05b4465bebf0f69d6b1773fb081dbe2.gif",
  "https://i.pinimg.com/originals/dc/5d/d9/dc5dd952ed21a25a8ca383af55af85f0.gif",
  ]

export default function Course() {
  let { id } = useParams();
  return (
    <>
      <div className="pagetitle">
            <h1>Course {id}</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="/courses/">Courses</Link></li>
                        <li class="breadcrumb-item active">{id}</li>
                    </ol>
                </nav>
        </div>

        <section className="section dashboard">
        <div className="row">

        <div className="col-lg-8">
          <div className="row">
                {[1, 2, 3, 4, 5].map((ind) => (
                    <Card img={imgs[id-1]}
                        title={`Task ${id}`}
                        text="АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА АБОБА"
                        link={`/tasks/${ind}`}
                        tag='Practice'
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
    </>
  );
}
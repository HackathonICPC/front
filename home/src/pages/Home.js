import React from "react";
import { Link } from "react-router-dom"

export default function Home() {
return (
    <div>
        <div className="pagetitle">
            <h1>Dashboard</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><Link to="/">Home</Link></li>
                    </ol>
                </nav>
        </div>
        <section className="section dashboard">
      <div className="row">

        {/* Left side columns */}
        <div className="col-lg-8">
          <div className="row">
            {/* <div className="d-flex">
              <div className="overflow-auto" style={{ height: '400px' }}> */}
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="card m-2" style={{ maxWidth: '700px' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={`https://i.pinimg.com/originals/f6/d2/90/f6d290a15e776e6631873f061918bcc5.gif`} className="img-fluid rounded-start" alt={`Card ${index}`} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* </div>
            </div> */}
          </div>
        </div>{/* End Left side columns */}

        {/* Right side columns */}
        <div className="col-lg-4">

          {/* Recent Activity */}
          <div className="card">

            <div className="card-body">
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>

              <div className="activity">

                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="activity-item d-flex">
                    <div className="activite-label">32 min</div>
                    <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                    <div className="activity-content">
                      {index === 2 ? (
                        <>Uploaded <a href="#" className="fw-bold text-dark">task 2</a></>
                      ) : (
                        <>Uploaded task {index}</>
                      )}
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>{/* End Recent Activity */}

          {/* Calendar 1 - Bootstrap Brain Component */}
          <div className="py-100 py-sm-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-20 col-lg-20 col-xl-100">
                  <div className="card widget-card border-light shadow-sm">
                    <div className="card-body p-10">
                      <div id="bsb-calendar-1" className="fc fc-media-screen fc-direction-ltr fc-theme-bootstrap5 bsb-calendar-theme"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>{/* End Right side columns */}

      </div>
    </section>
       
    </div>
);
}
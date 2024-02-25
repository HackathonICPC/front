import React from "react";
import { Link, useParams } from "react-router-dom";

import Card from "../components/Card";

const imgs = ['https://i.pinimg.com/originals/f6/d2/90/f6d290a15e776e6631873f061918bcc5.gif',
  "https://i.pinimg.com/originals/15/c1/44/15c144e8dc552a100b3292d268854499.gif",
  "https://i.pinimg.com/originals/cc/cc/04/cccc04f856af5a5dba7c5fca2e73f982.gif",
  "https://i.pinimg.com/originals/c0/5b/44/c05b4465bebf0f69d6b1773fb081dbe2.gif",
  "https://i.pinimg.com/originals/dc/5d/d9/dc5dd952ed21a25a8ca383af55af85f0.gif",
  ]

export default function Tasks(props) {
  let {id} = useParams();

  return (
    <>
      <div className="pagetitle">
            <h1>Task {id}</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active"><Link to={`/tasks/${id}/`}> Task {id}</Link></li>
                    </ol>
                </nav>
        </div>

        <section className="section dashboard">
        <div className="row">

        <div className="col-lg-8">
          <div className="row">
          <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">A. Theatre Square</h5>
    <div class="task_list">
      <ul>
        <li><a href="#" class="fw-bold text-dark">time limit:</a> 1 second</li>
        <li><a href="#" class="fw-bold text-dark">memory limit:</a> 256 megabytes</li>
        <li><a href="#" class="fw-bold text-dark">input:</a> standard input</li>
        <li><a href="#" class="fw-bold text-dark">output:</a> standard output</li>
       </ul>
    </div>
    <p>
      Theatre Square in the capital city of Berland has a rectangular shape with the size n x m meters. On the occasion of the city's anniversary, a decision was taken to pave the Square with square granite flagstones. Each flagstone is of the size a x a.
    </p>
    <p>
      What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger than the Theatre Square, but the Square has to be covered. It's not allowed to break the flagstones. The sides of flagstones should be parallel to the sides of the Square.
    </p>
    <div class="input_specification"> 
      <div class="section-title">Input</div>
    </div>
    <p>The input contains three positive integer numbers in the first line: <span class="tex-span"><i>n</i>,  <i>m</i></span> and <span class="tex-span"><i>a</i></span> (<span class="tex-span">1 ≤  <i>n</i>, <i>m</i>, <i>a</i> ≤ 10<sup class="upper-index">9</sup></span>).</p>

    <div class="input_specification"><div class="section-title">Output</div></div>
    <p>Write the needed number of flagstones.</p>
    
    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Repository Link</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div class="form-group">
          <label for="textarea">Comment</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>
  </div>

</div>
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
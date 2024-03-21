import { Link } from "react-router-dom"

/*
props:
    img: string https://i.pinimg.com/originals/f6/d2/90/f6d290a15e776e6631873f061918bcc5.gif
    title: string
    text: string
    tag: string
*/
export default function Card(props) {
return(
        <div className="card m-2" style={{ maxWidth: '800px' }}>
            <div className="row g-0">
                    <div className="col-md-4">
                        <Link to={props.link}>
                        <img src={props.img} className="img-fluid rounded-start" alt={props.title} />
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link to={props.link}>
                                <h5 className="card-title">{props.title}</h5>
                            </Link>
                            <span class="tag">{props.tag}</span>
                            <p className="card-text"> {props.text} </p>
                            
                           
                            <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
                                
                            <div class="row g-2">
                                <div class="col-lg-1">
                                <button class="form-submit-btn" type="button">Link to repository</button>
                            </div></div>

                                <div class="row g-2">
                                    <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                                    
                                    <button class="form-submit-btn" type="button">Grade</button>
                                </div>
                           
                            </div>  
                       
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


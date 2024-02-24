import { Link } from "react-router-dom"

/*
props:
    img: string https://i.pinimg.com/originals/f6/d2/90/f6d290a15e776e6631873f061918bcc5.gif
    title: string
    text: string

*/
export default function Card(props) {
return(
        <div className="card m-2" style={{ maxWidth: '700px' }}>
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
                            <p className="card-text"> {props.text} </p>
                            {/*<p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};


import { Link } from "react-router-dom"

export default function Logo(props){
    return (
        <div class="d-flex align-items-center justify-content-between">
            <Link to='/' class="logo d-flex align-items-center">
                <img src={props.src} alt=""/>
                <span class="d-none d-lg-block">{props.label}</span>
            </Link>
        </div>
    );
}
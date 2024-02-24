
/*
props:
    src: path to img
    name: text
*/
export default function Profile(props){
    return (
        <li class="nav-item dropdown pe-3">
            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src={props.src} alt="Profile" class="rounded-circle"/>
                <span class="d-none d-md-block dropdown-toggle ps-2"> {props.name}</span>
            </a>
        </li>
    );
}
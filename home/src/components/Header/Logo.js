
export default function Logo(props){
    return (
        <div class="d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                <img src={props.src} alt=""/>
            <span class="d-none d-lg-block">{props.label}</span>
            </a>
        </div>
    );
}
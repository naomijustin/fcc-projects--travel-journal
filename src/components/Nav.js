export default function Nav() {
    return(
        <nav className="nav-container">
            <img src={process.env.PUBLIC_URL + '/images/icon-world.svg'} style={{"height": "20px"}}></img>
            <span>my travel  journal.</span>
        </nav>
    );
}
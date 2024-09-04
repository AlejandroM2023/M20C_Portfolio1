import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navbar bg-secondary">
            <div className="container-fluid">
                <h1 className="navbar-brand">Alejandro Meza</h1>
                    <ul className="d-flex p-0">
                        <Link key={1} className="nav-link text-light mx-2" to="/">About Me</Link>
                        <Link key={2} className="nav-link text-light mx-2" to="/portfolio">Portfolio</Link>
                        <Link key={3} className="nav-link text-light mx-2" to="/contact">Contact</Link>
                        <Link key={4} className="nav-link text-light mx-2" to="/resume">Resume</Link>
                    </ul>
            </div>
        </nav>
    )
}
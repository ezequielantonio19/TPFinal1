import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link className={"logo"} to={"/"}>
            <h1>RULOPLAST ENVASES</h1>
            </Link>

            <nav>
                <ul>
                    <li> <NavLink className={"navLink"} to={`/categoria/2`}>Potes</NavLink></li>
                    <li><NavLink className={"navLink"} to={"/Botellas"}>Botellas</NavLink></li>
                    <li><NavLink className={"navLink"} to={`/categoria/3`}>Pour On</NavLink></li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar
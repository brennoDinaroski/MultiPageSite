import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
        <div class="navBar">
            {/* <h1>navbar</h1> */}
            <div>
                <img class="navBar__logo" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"/>
            </div>
            <div class="navBar__list__links">
                <Link to="/" class="links__items"> Home </Link>
                <Link to="/Products" class="links__items"> Products </Link>
                <Link to="/Contact" class="links__items"> Contact </Link>
                <Link to="/Cart" class="links__items" > Cart </Link>
            </div>
        </div>
        </>
    )
}
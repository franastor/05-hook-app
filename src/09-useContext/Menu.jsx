import { Link, NavLink } from "react-router-dom"

export const Menu = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3" >
            <div className="container-fluid">


                <Link className="navbar-brand" to="/">useContext</Link>

 {/** Navlink tiene nua propiedad que es isActive que me dice si estamos en ese link o no */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink 
                        className={( { isActive }) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/">
                            Home
                        </NavLink>
                        <NavLink 
                        className={( { isActive }) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/about">
                            About
                        </NavLink>
                        <NavLink 
                        className={( { isActive }) => `nav-link ${ isActive ? 'active' : '' } ` }
                        to="/login">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )

}
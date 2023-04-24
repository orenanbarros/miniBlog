import { NavLink } from "react-router-dom"

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav>
            <NavLink to="/" className={styles.brand}>Mini <span>BLOG</span></NavLink>
            <ul className={styles.linksList}>
                <li><NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="/about">Sobre</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
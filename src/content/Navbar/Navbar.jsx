import { NavbarOptions } from './components'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarTop">
                <div className='navbarLogo'></div>
            </div>
            <NavbarOptions />
        </div>
    )
}
import Imgs from '../../imgs'
import { NavbarOptions } from './components'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarTop">
                <div className='navbarLogo'>
                    <div className='container'>
                        <div>
                            <Imgs type={'logo'} className={'logo'} />
                        </div>
                        <div>
                            <Imgs type={'logoname'} className={'logoname'} />
                        </div>
                    </div>
                </div>
            </div>
            <NavbarOptions />
        </div>
    )
}
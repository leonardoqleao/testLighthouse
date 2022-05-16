import Imgs from '../../imgs'
import { NavbarOptions } from './components'

export default function Navbar() {
    return (
        <>
            <div className="navbarTop">
                <div className='navbarLogo'>
                    <div className='container'>
                        <div>
                            <Imgs type={'logo'} className={'logo'} />
                        </div>
                        <div className='logoname'>
                            <Imgs type={'logoname'} />
                        </div>
                    </div>
                </div>
            </div>
            <NavbarOptions />
        </>
    )
}
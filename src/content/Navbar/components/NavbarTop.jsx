import Imgs from '../../../imgs'

export const NavbarTop = () => {
    return (
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
    )
}
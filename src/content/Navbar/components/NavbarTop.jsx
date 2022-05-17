import Imgs from '../../../imgs'

export const NavbarTop = () => {
    return (
        <nav className="navbarTop">
            <div className='navbarLogo'>
                <div className='container'>
                    <span>
                        <Imgs type={'logo'} className={'logo'} />
                    </span>
                    <div className='logoname'>
                        <Imgs type={'logoname'} />
                    </div>
                </div>
            </div>
            <div className='navbarTop2'>
                <div className='container'>
                    <span>
                        <Imgs className={'bars'} type={'bars'} height={30} />
                    </span>
                </div>
                <div>
                    <span>
                        <Imgs className={'comment'} type={'comment'} height={30} />
                    </span>
                    <span>
                        <Imgs className={'bell'} type={'bell'} height={30} />
                    </span>
                    <span>
                        <Imgs className={'myPicture'} type={'mypicutre'}/>
                    </span>
                </div>
            </div>
        </nav>
    )
}
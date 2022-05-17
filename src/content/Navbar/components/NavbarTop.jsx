import { Component, useEffect, useState } from 'react'
import Imgs from '../../../imgs'

export const NavbarTop = () => {
    const [infNotifyComment, setInfNotifyComment] = useState(3);
    const [infNotifyBell, setInfNotifyBell] = useState(1);
    const [displayInfNotifyBell, setDisplayInfNotifyBell] = useState('');
    const [displayInfNotifyComment, setDisplayInfNotifyComment] = useState('');

    useEffect(() => {
        if (infNotifyBell <= 0) {
            setDisplayInfNotifyBell('none')
            setTimeout(() => { setInfNotifyBell(1) }, 2000)
        } else {
            setDisplayInfNotifyBell('')
        }
        if (infNotifyComment <= 0) {
            setDisplayInfNotifyComment('none')
            setTimeout(() => { setInfNotifyComment(3) }, 2000)
        } else {
            setDisplayInfNotifyComment('')
        }

    }, [infNotifyComment, infNotifyBell])
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
                    <span onClick={() => setInfNotifyComment(0)} className='comment'>
                        <span style={{ display: displayInfNotifyComment }} className='notificationNumbers'>{infNotifyComment}</span>
                        <Imgs type={'comment'} height={30} />
                    </span>
                    <span onClick={() => setInfNotifyBell(0)} className={'bell'}>
                        <span style={{ display: displayInfNotifyBell }} className='notificationNumbers'>{infNotifyBell}</span>
                        <Imgs type={'bell'} height={30} />
                    </span>
                    <span>
                        <Imgs className={'myPicture'} type={'mypicutre'} />
                    </span>
                </div>
            </div>
        </nav>
    )
}
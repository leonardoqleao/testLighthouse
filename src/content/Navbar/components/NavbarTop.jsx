import { useEffect, useState, useContext } from 'react'
import { OptionsStyleContext } from "../../../context"
import Imgs from '../../../imgs'

export const NavbarTop = () => {
    const [infNotifyComment, setInfNotifyComment] = useState(3);
    const [infNotifyBell, setInfNotifyBell] = useState(1);
    const [displayInfNotifyBell, setDisplayInfNotifyBell] = useState('');
    const [displayInfNotifyComment, setDisplayInfNotifyComment] = useState('');
    const { style } = useContext(OptionsStyleContext)

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
            <div className={style.navbarLogo}>
                <div className='container'>
                    <span>
                        <Imgs type={'logo'} className={'logo'} />
                    </span>
                    <div className='logoname'>
                        <Imgs height={20} type={'logoname'} />
                    </div>
                </div>
            </div>
            <div className={style.navbarTop2}>
                <BarsClick />
                <div>
                    <span onClick={() => setInfNotifyComment(0)} className='comment'>
                        <span style={{ display: displayInfNotifyComment }} className='notificationNumbers'><p>{infNotifyComment}</p></span>
                        <Imgs type={'comment'} height={30} />
                    </span>
                    <span onClick={() => setInfNotifyBell(0)} className={'bell'}>
                        <span style={{ display: displayInfNotifyBell }} className='notificationNumbers'><p>{infNotifyBell}</p></span>
                        <Imgs type={'bell'} height={30} />
                    </span>
                    <SettingsUser />
                </div>
            </div>
        </nav>
    )
}

const SettingsUser = () => {
    const [settingsUserDisplay, setSettingUserDisplay] = useState('settingsUser')
    return (
        <span onClick={() => {
            if (settingsUserDisplay === 'settingsUser transitonOpen') {
                setSettingUserDisplay('settingsUser transitonClose')
            } else {
                setSettingUserDisplay('settingsUser transitonOpen')
            }
        }}>
            <Imgs className={'myPicture'} type={'mypicutre'} />
            <nav className={settingsUserDisplay}>
                <ul className='list'>
                    <li>Meus Dados</li>
                    <li>Alterar Senha</li>
                    <li>Planos</li>
                    <li>Servi??os</li>
                    <li>D??vidas Frequentes</li>
                    <li>Contato</li>
                    <li>Sair</li>
                </ul>
            </nav>
        </span>
    )
}
const BarsClick = () => {
    const { style, setStyle } = useContext(OptionsStyleContext)
    const onClickMenu = () => {
        const navbarClose = {
            navbarLeft: 'navbarLeft navbarLeftAnimationClose',
            navbarOptions: 'navbarOptions navbarOptionsClose',
            navbarSignOut: 'navbarSignOut navbarSignOutClose',
            dashboard: 'dashboard dashboardNavbarClose',
            navbarLogo: 'navbarLogo navbarLogoClose',
            navbarTop2: 'navbarTop2 navbarTop2Close'
        }
        const navbarOpen = {
            open: true,
            navbarLeft: 'navbarLeft navbarLeftAnimationOpen',
            navbarOptions: 'navbarOptions',
            navbarSignOut: 'navbarSignOut',
            dashboard: 'dashboard dashboardNavbarOpen',
            navbarLogo: 'navbarLogo navbarLogoOpen',
            navbarTop2: 'navbarTop2 navbarTop2Open'
        }
        if (style.open) {
            setStyle(navbarClose)
        } else {
            setStyle(navbarOpen)
        }
    }
    return (
        <div onClick={onClickMenu} className='container'>
            <span >
                <Imgs className={'bars'} type={'bars'} height={30} />
            </span>
        </div>
    )
}

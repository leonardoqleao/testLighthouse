import Imgs from '../../imgs'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarTop">
                <div className='navbarLogo'></div>
            </div>
            <div className="navbarLeft">
                <nav>
                    <ul className='navbarOptions'>
                        <li><Imgs type={'chart-bar'}      className={'svgClass'} height={16} fill={"#00D954"}/>Dashboard</li>
                        <li><Imgs type={'shovel'}         className={'svgClass'} height={16} fill={"#5A5773"}/>Leads</li>
                        <li><Imgs type={'bullseye-arrow'} className={'svgClass'} height={16} fill={"#5A5773"}/>Campanhas</li>
                        <li><Imgs type={'shopping-cart'}  className={'svgClass'} height={16} fill={"#5A5773"}/>Vendas</li>
                        <li><Imgs type={'user'}           className={'svgClass'} height={16} fill={"#5A5773"}/>Clientes</li>
                        <li><Imgs type={'receipt'}        className={'svgClass'} height={16} fill={"#5A5773"}/>Cobrança</li>
                        <li><Imgs type={'cog'}            className={'svgClass'} height={16} fill={"#5A5773"}/>Configurações</li>
                    </ul>
                </nav>
                    <ul className='navbarSignOut'>
                        <li><Imgs type={'sign-out-alt'} className={'svgClass'} height={16} fill={"#5A5773"}/>Sair</li>
                    </ul>
            </div>
        </div>
    )
}
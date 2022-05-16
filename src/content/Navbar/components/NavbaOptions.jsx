import Imgs from "../../../imgs"

export default function NavbarOptions() {
    return (
        <nav className="navbarLeft" >
            <ul className='navbarOptions'>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'chart-bar'} height={16} fill={"#00D954"} />
                    </span>
                    <span>
                        Dashboard
                    </span>
                </li>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'shovel'} height={16} fill={"#5A5773"} />
                    </span>
                    <span>
                        Leads
                    </span>
                </li>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'bullseye-arrow'} height={16} fill={"#5A5773"} />
                    </span>
                    <span>
                        Campanhas
                    </span>
                </li>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'shopping-cart'} height={16} fill={"#5A5773"} />
                    </span>
                    <span>
                        Vendas
                    </span>
                </li>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'user'} height={16} fill={"#5A5773"} />
                    </span>
                    <span>
                        Clientes
                    </span>
                </li>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'receipt'} height={16} fill={"#5A5773"} />
                    </span>
                    <span>
                        Cobrança
                    </span>
                </li>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'cog'} height={16} fill={"#5A5773"} />
                    </span>
                    <span>
                        Configurações
                    </span>
                </li>
            </ul>
            <ul className='navbarSignOut'>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'sign-out-alt'} height={16} fill={"#5A5773"} />
                    </span>
                    <span>
                        Sair
                    </span>
                </li>
            </ul>
        </nav>
    )
}
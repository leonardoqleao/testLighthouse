import Svg from '../../svg'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarTop">
            </div>
            <div className="navbarLeft">
                <nav>
                    <ul>
                        <li><Svg type={'chart-bar'}      height={16} fill={"#00D954"}/>Dashboard</li>
                        <li><Svg type={'shovel'}         height={16} fill={"#5A5773"}/>Leads</li>
                        <li><Svg type={'bullseye-arrow'} height={16} fill={"#5A5773"}/>Campanhas</li>
                        <li><Svg type={'shopping-cart'}  height={16} fill={"#5A5773"}/>Vendas</li>
                        <li><Svg type={'user'}           height={16} fill={"#5A5773"}/>Clientes</li>
                        <li><Svg type={'receipt'}        height={16} fill={"#5A5773"}/>Cobrança</li>
                        <li><Svg type={'cog'}            height={16} fill={"#5A5773"}/>Configurações</li>
                    </ul>
                </nav>
                    <ul>
                        <li><Svg type={'sign-out-alt'} height={16} fill={"#5A5773"}/>Sair</li>
                    </ul>
            </div>
        </div>
    )
}
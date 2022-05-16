import { useContext } from "react"
import { OptionsNavbarContext } from "../../../context"
import Imgs from "../../../imgs"

export default function NavbarOptions() {
    return (
        <nav className="navbarLeft" >
            <ul className='navbarOptions'>
                <Dashboard />
                <Leads />
                <Campanhas />
                <Vendas />
                <Clientes />
                <Cobranca />
                <Configuracoes />
            </ul>
            <ul className='navbarSignOut'>
                <li>
                    <span className='svgClass'>
                        <Imgs type={'sign-out-alt'} height={16} />
                    </span>
                    <span>
                        Sair
                    </span>
                </li>
            </ul>
        </nav>
    )
}

function Dashboard() {
    const { selected, setSelected } = useContext(OptionsNavbarContext)
    return (
        <li onClick={(e) => { if (!e.target.className) setSelected({ Dashboard: 'selected' }) }} className={selected.Dashboard}>
            <span className='svgClass'>
                <Imgs type={'chart-bar'} height={16} />
            </span>
            <span>Dashboard</span>
        </li>
    )
}
function Leads() {
    const { selected, setSelected } = useContext(OptionsNavbarContext)
    return (
        <li onClick={(e) => { if (!e.target.className) setSelected({ Leads: 'selected' }) }} className={selected.Leads}>
            <span className='svgClass'>
                <Imgs type={'shovel'} height={16} />
            </span>
            <span>Leads</span>
        </li>
    )
}
function Campanhas() {
    const { selected, setSelected } = useContext(OptionsNavbarContext)
    return (
        <li onClick={(e) => { if (!e.target.className) setSelected({ Campanhas: 'selected' }) }} className={selected.Campanhas} >
            <span className='svgClass'>
                <Imgs type={'bullseye-arrow'} height={16} />
            </span>
            <span>
                Campanhas
            </span>
        </li>
    )
}
function Vendas() {
    const { selected, setSelected } = useContext(OptionsNavbarContext)
    return (
        <li onClick={(e) => { if (!e.target.className) setSelected({ Vendas: 'selected' }) }} className={selected.Vendas} >
            <span className='svgClass'>
                <Imgs type={'shopping-cart'} height={16} />
            </span>
            <span>Vendas</span>
        </li>
    )
}
function Clientes() {
    const { selected, setSelected } = useContext(OptionsNavbarContext)
    return (
        <li onClick={(e) => { if (!e.target.className) setSelected({ Clientes: 'selected' }) }} className={selected.Clientes} >
            <span className='svgClass'>
                <Imgs type={'user'} height={16} />
            </span>
            <span>Clientes</span>
        </li>
    )
}
function Cobranca() {
    const { selected, setSelected } = useContext(OptionsNavbarContext)
    return (
        <li onClick={(e) => { if (!e.target.className) setSelected({ Cobranca: 'selected' }) }} className={selected.Cobranca} >
            <span className='svgClass'>
                <Imgs type={'receipt'} height={16} />
            </span>
            <span>Cobrança</span>
        </li>
    )
}
function Configuracoes() {
    const { selected, setSelected } = useContext(OptionsNavbarContext)
    return (
        <li onClick={(e) => { if (!e.target.className) setSelected({ Configuracoes: 'selected' }) }} className={selected.Configuracoes} >
            <span className='svgClass'>
                <Imgs type={'cog'} height={16} />
            </span>
            <span>Configurações</span>
        </li>
    )
}

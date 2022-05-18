import { useContext } from "react"
import { OptionsStyleContext } from '../../context'
import Imgs from "../../imgs"

export default function Dashboard() {
    const { style } = useContext(OptionsStyleContext)
    return (
        <div className={style.dashboard}>
            <div className="title">
                <h1>
                    Indicadores
                </h1>
                <div className="container">
                    <p>
                        <b>Período:</b>Últimos 12 meses
                    </p>
                    <div className="filter">
                        <Imgs type={"filter"} height={16} />
                        <p>filter</p>
                    </div>
                </div>
            </div>
            <div className="properties">
                <div className="propertiBox vendas">
                    <div className="titleProperties">
                        <Imgs type={'shopping-cart'} height={20} />
                        <p>Vendas</p>
                    </div>
                    <p className="valueProperties">245</p>
                    <span className='statusProperties'>
                        <Imgs type={'sort-up'} height={20} />
                        12,67%
                    </span>
                </div>
                <div className="propertiBox faturamento">
                    <div className="titleProperties">
                        <Imgs type={'dollar-sign'} height={20} />
                        <p>Faturamento</p>
                    </div>
                    <p className="valueProperties">
                        <p>R$</p>12.167.943
                    </p>
                    <span className='statusProperties'>
                        <Imgs type={'sort-up'} height={20} />
                        4,67%
                    </span>
                </div>
                <div className="propertiBox conversao">
                    <div className="titleProperties">
                        <Imgs type={'exchange-alt'} height={16} />
                        <p>Conversão</p>
                    </div>
                    <p className="valueProperties">
                        12%
                    </p>
                    <span className='statusProperties'>
                        <Imgs type={'sort-up'} height={20} />
                        21,67%
                    </span>
                </div>
                <div className="propertiBox leads">
                    <div className="titleProperties">
                        <Imgs type={'user'} height={16} />
                        <p>Leads</p>
                    </div>
                    <p className="valueProperties">
                        432
                    </p>
                    <span className='statusProperties'>
                        <Imgs type={'sort-up'} height={20} />
                        21,67%
                    </span>
                </div>
            </div>
            <div className="grafic"></div>
        </div>
    )
}
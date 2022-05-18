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
                        <Imgs type={"filter"} height={16}/>
                        <p>filter</p>
                    </div>
                </div>
            </div>
            <div className="properties">
                <div className="vendas">
                    <div className="titleProperties">
                        <Imgs type={'shopping-cart'} height={20}/>
                        <p>Vendas</p>
                    </div>
                    <p className="valueProperties">245</p>
                    <span className='statusProperties'>
                        <Imgs type={'sort-up'} height={20}/>
                        12,67%
                    </span>
                </div>
                <div className="faturamento">
                <div className="titleProperties">
                        <Imgs type={'dollar-sign'} height={20}/>
                        <p>Faturamento</p>
                    </div>
                    <p className="valueProperties">
                        <p>R$</p>12.167.943
                    </p>
                    <span className='statusProperties'>
                        <Imgs type={'sort-up'} height={20}/>
                        4,67%
                    </span>
                </div>
                <div className="conversao"></div>
                <div className="leads"></div>
            </div>
            <div className="grafic"></div>
        </div>
    )
}
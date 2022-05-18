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
                <div>
                    <p>
                        Período: Últimos 12 meses
                    </p>
                    <div className="filter">
                        <Imgs type={"filter"} height={16}/>
                        <p>filter</p>
                    </div>
                </div>
            </div>
            <div className="properties"></div>
            <div className="grafic"></div>
        </div>
    )
}
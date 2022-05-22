import { useContext } from "react"
import { OptionsStyleContext } from '../../context'
import { Grafic, Properties } from "./components"
import Imgs from "../../imgs"

export default function Dashboard() {
    const { style } = useContext(OptionsStyleContext)
    return (
        <section className={style.dashboard}>
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
            <Properties/>
            <Grafic/>
        </section>
    )
}

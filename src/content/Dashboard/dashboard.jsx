import { useContext } from "react"
import { OptionsStyleContext } from '../../context'
export default function Dashboard() {
    const { style } = useContext(OptionsStyleContext)
    return (
        <div className={style.dashboard}>
            bom diass
        </div>
    )
}
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Imgs from '../../../imgs'

export const Grafic = () => {
    return (
        <div className="grafic">
            <div className="graficTitle">
                <div className='legendTitle'>
                    <Imgs type={'dollar-sign'} height={20} />
                    Faturamento vs Custo Fixo
                </div>
                <div className='legend'>
                    <span className='legendFaturamento'>
                        <div className="circle"></div>
                        Faturamento
                    </span>
                    <span className='legendCustoFixo'>
                        <div className="circle"></div>
                        Custo Fixo
                    </span>
                </div>
            </div>
            <div className='containerGrafic'>
                <div className='yaxis'>
                    <span>0</span>
                    <span className='yaxis-mb'>100</span>
                    <span>200</span>
                    <span className='yaxis-mb'>300</span>
                    <span>400</span>
                </div>
                <div className="lineGrafic">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart width={730} height={250} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="-" />
                            <Tooltip />
                            <Area type="monotone" dataKey="faturamento" strokeWidth={"4px"} stroke="#00F25D" fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="custo_fixo" strokeWidth={"4px"} stroke="#FF0000" fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="xaxis">
                {data.map((data) => (
                    <span className={parseInt(data.name) % 2 === 0 ? 'xaxis-mb' : ''}>{data.name}</span>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        name: '0',
        faturamento: 100,
        custo_fixo: 50,
    },
    {
        name: '01',
        faturamento: 300,
        custo_fixo: 200,
    },
    {
        name: '02',
        faturamento: 200,
        custo_fixo: 10,
    },
    {
        name: '03',
        faturamento: 300,
        custo_fixo: 200,
    },
    {
        name: '04',
        faturamento: 200,
        custo_fixo: 10,
    },
    {
        name: '05',
        faturamento: 300,
        custo_fixo: 400,
    },
    {
        name: '06',
        faturamento: 150,
        custo_fixo: 250,
    },
    {
        name: '07',
        faturamento: 250,
        custo_fixo: 100,
    },
    {
        name: '08',
        faturamento: 300,
        custo_fixo: 200,
    },
    {
        name: '09',
        faturamento: 260,
        custo_fixo: 10,
    },
    {
        name: '10',
        faturamento: 200,
        custo_fixo: 200,
    },
    {
        name: '11',
        faturamento: 350,
        custo_fixo: 400,
    },
    {
        name: '12',
        faturamento: 200,
        custo_fixo: 300,
    },
];
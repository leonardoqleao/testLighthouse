import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Imgs from '../../../imgs'

export const Grafic = () => {
    return (
        <div className="grafic">
            <div className="graficTitle">
                <span className='title'>
                    <Imgs type={'dollar-sign'} height={20} />
                    Faturamento vs Custo Fixo
                </span>
                <span className='legend'>
                    <span className='legendFaturamento'>Faturamento</span>
                    <span className='legendCustoFixo'> Custo Fixo </span>
                </span>
            </div>
            <div className="lineGrafic">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis />
                        <YAxis />
                        <CartesianGrid strokeDasharray="-" />
                        <Tooltip />
                        <Area type="monotone" dataKey="c" strokeWidth={"4px"} stroke="#00F25D" fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="f" strokeWidth={"4px"} stroke="#FF0000" fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

const data = [
    {
        name: '1',
        c: 300,
        f: 200,
    },
    {
        name: '2',
        c: 200,
        f: 0,
    },
    {
        name: '3',
        c: 300,
        f: 200,
    },
    {
        name: '4',
        c: 200,
        f: 0,
    },
    {
        name: '5',
        c: 300,
        f: 400,
    },
    {
        name: '6',
        c: 150,
        f: 250,
    },
    {
        name: '7',
        c: 250,
        f: 100,
    },
    {
        name: '8',
        c: 300,
        f: 200,
    },
    {
        name: '9',
        c: 260,
        f: 0,
    },
    {
        name: '10',
        c: 200,
        f: 200,
    },
    {
        name: '11',
        c: 350,
        f: 400,
    },
    {
        name: '12',
        c: 200,
        f: 300,
    },
];
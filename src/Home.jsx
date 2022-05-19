import { Navbar, Dashboard } from "./content"
import { OptionsNavbarProvider } from "./context"
import { Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <OptionsNavbarProvider>
        <Navbar />
      </OptionsNavbarProvider>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/leads' element={<></>} />
        <Route path='/campanhas' element={<></>} />
        <Route path='/vendas' element={<></>} />
        <Route path='/clientes' element={<></>} />
        <Route path='/cobranca' element={<></>} />
        <Route path='/configuracoes' element={<></>} />
      </Routes>
    </div>
  )
}

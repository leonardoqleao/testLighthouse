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
        <Route path='/leads' element={<div>Leads Empty</div>} />
        <Route path='/campanhas' element={<div>Campanhas Empty</div>} />
        <Route path='/vendas' element={<div>Vendas Empty</div>} />
        <Route path='/clientes' element={<div>Clientes Empty</div>} />
        <Route path='/cobranca' element={<div>Cobranca Empty</div>} />
        <Route path='/configuracoes' element={<div>Configurações Empty</div>} />
      </Routes>
    </div>
  )
}

import { Navbar, Dashboard } from "./content"
import { OptionsNavbarProvider } from "./context"
export default function Home() {
  return (
    <div className="Home">
      <OptionsNavbarProvider>
        <Navbar />
      </OptionsNavbarProvider>
      <Dashboard />
    </div>
  )
}

import { Social } from "./components/Layout/Social"
import About from "./components/Ui/About"
import { Contact } from "./components/Ui/Contact"
import { Home } from "./components/Ui/Home"
import { Myexperince } from "./components/Ui/Myexperince"
import { Portfolio } from "./components/Ui/Portfolio"
import { Services } from "./components/Ui/Services"

function App() {

  return (
    <div>
      <div>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
        <Myexperince/>
        <Contact/>
        <Social/>
      </div>
    </div>
   
  )
}

export default App

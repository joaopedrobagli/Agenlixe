import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Depoimentos from "./components/Depoimentos";

function App() {
  return (
    <div className="bg-[#0B0C2A] min-h-screen">
      <Header />
      <Hero />
      <Servicos />
      <Depoimentos />
    </div>
  )
}

export default App;
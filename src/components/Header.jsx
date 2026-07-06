import { useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-[#0B0C2A] fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        <img src="/logo-icone.png" alt="AgenLix" className="h-12 w-auto" />

        <nav className="hidden md:flex gap-8 items-center">
           <a href="#inicio" className="text-white/70 hover:text-white text-base font-medium transition">Início</a>
           <a href="#servicos" className="text-white/70 hover:text-white text-base font-medium transition">Serviços</a>
           <a href="#depoimentos" className="text-white/70 hover:text-white text-base font-medium transition">Depoimentos</a>
           <a href="#contato" className="bg-gradient-to-r from-[#4F6EF7] to-[#7B2FF7] bg-clip-text text-transparent text-base font-semibold transition">Contato</a>
        </nav>

        <button
          className="md:hidden text-white/60"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {menuAberto && (
        <div className="md:hidden bg-[#0B0C2A] px-8 pb-4 flex flex-col gap-4 border-t border-white/10">
          <a href="#inicio" className="text-white/60 text-sm py-1">Início</a>
          <a href="#servicos" className="text-white/60 text-sm py-1">Serviços</a>
          <a href="#depoimentos" className="text-white/60 text-sm py-1">Depoimentos</a>
          <a href="#contato" className="bg-gradient-to-r from-[#4F6EF7] to-[#7B2FF7] bg-clip-text text-transparent text-sm font-semibold py-1">Contato</a>
        </div>
      )}
    </header>
  );
}

export default Header;
function Footer() {
  return (
    <footer className="bg-[#0B0C2A] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid grid-cols-3 gap-12 pb-12 border-b border-white/8">

          <div className="flex flex-col gap-4">
            <img src="/logo-icone.png" alt="AgenLix" className="h-12 w-12 object-contain" />
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Transformamos sua presença digital em resultados reais. Estratégia, criatividade e tecnologia a serviço do seu negócio.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-widest text-white/30 uppercase mb-2">Navegação</p>
            <a href="#inicio" className="text-sm text-white/50 hover:text-white transition">Início</a>
            <a href="#servicos" className="text-sm text-white/50 hover:text-white transition">Serviços</a>
            <a href="#depoimentos" className="text-sm text-white/50 hover:text-white transition">Depoimentos</a>
            <a href="#contato" className="text-sm text-white/50 hover:text-white transition">Contato</a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-widest text-white/30 uppercase mb-2">Redes Sociais</p>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-white/50 hover:text-white transition">Instagram</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-white/50 hover:text-white transition">LinkedIn</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-white/50 hover:text-white transition">Facebook</a>
          </div>

        </div>

        <div className="flex justify-between items-center pt-6">
          <p className="text-xs text-white/20">© 2026 AgenLix. Todos os direitos reservados.</p>
          <p className="text-xs text-white/20">Desenvolvido por AgenLix</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
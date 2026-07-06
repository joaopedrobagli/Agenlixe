function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-[#0B0C2A]/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-24">

        <p className="text-xs tracking-widest text-white/35 uppercase mb-6">
          Agência digital
        </p>

        <h1 className="text-5xl font-bold text-white leading-tight max-w-2xl mb-6">
          Resultados reais <br />
          para o seu negócio
        </h1>

        <p className="text-lg text-white/55 max-w-xl leading-relaxed mb-10">
          Criamos estratégias, sites e campanhas que conectam sua marca ao público certo e geram crescimento de verdade.
        </p>

        <div className="flex gap-8 items-center">
        <a href="#contato" className="text-white text-sm font-medium px-7 py-3 rounded-md border border-white/30 hover:border-white/60 transition">
         Fale conosco
       </a>
       <a href="#servicos" className="text-white/40 text-sm hover:text-white/60 transition">
        Ver serviços →
      </a>
      </div>

      </div>
    </section>
  );
}

export default Hero;
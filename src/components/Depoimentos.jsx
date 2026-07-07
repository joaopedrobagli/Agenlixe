function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      nome: "Carlos Mendes",
      cargo: "CEO — Construtora Mendes",
      foto: "/cliente1.png",
      texto: "A AgenLix transformou nossa presença digital. Em 3 meses, triplicamos os leads vindos do Google e nosso site finalmente representa o tamanho da nossa empresa.",
    },
    {
      id: 2,
      nome: "Ana Souza",
      cargo: "Fundadora — Loja Bella Moda",
      foto: "/cliente2.png",
      texto: "Nunca imaginei que redes sociais poderiam trazer tanto resultado. A equipe da AgenLix entendeu minha marca desde o primeiro dia e o engajamento explodiu.",
    },
    {
      id: 3,
      nome: "Ricardo Lima",
      cargo: "Diretor — Clínica OralVida",
      foto: "/cliente3.png",
      texto: "Profissionalismo e resultado do início ao fim. A identidade visual que criaram para a clínica elevou demais a percepção dos nossos pacientes.",
    },
  ];

  return (
    <section id="depoimentos" className="bg-[#0B0C2A] py-24">
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-xs tracking-widest text-white/30 uppercase mb-3">
          Depoimentos
        </p>
        <h2 className="text-4xl font-bold text-white mb-16 leading-tight">
          O que nossos clientes <br /> dizem sobre nós
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {depoimentos.map((dep) => (
            <div
              key={dep.id}
              className="border border-white/10 rounded-xl p-8 flex flex-col gap-6"
            >
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                "{dep.texto}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={dep.foto}
                  alt={dep.nome}
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{dep.nome}</p>
                  <p className="text-white/35 text-xs">{dep.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Depoimentos;
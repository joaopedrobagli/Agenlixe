function Servicos() {
  const servicos = [
    {
      numero: "01",
      tag: "Sites",
      titulo: "Criação de Sites",
      descricao: "Sites institucionais e landing pages com foco em conversão, design moderno e responsivo.",
      resultado: "+80",
      legenda: "sites entregues",
      destaque: true,
      cor: "#4F6EF7",
    },
    {
      numero: "02",
      tag: "Ads",
      titulo: "Tráfego Pago",
      descricao: "Campanhas no Google e Meta Ads com métricas claras, otimização contínua e resultado real.",
      resultado: "+R$2M",
      legenda: "em receita gerada para clientes",
      destaque: true,
      cor: "#7B2FF7",
    },
    {
      numero: "03",
      tag: "Social",
      titulo: "Social Media",
      descricao: "Gestão completa das redes com calendário editorial, criação de conteúdo e relatórios mensais.",
      resultado: "+40",
      legenda: "marcas gerenciadas",
      destaque: false,
      cor: "#0B0C2A",
    },
    {
      numero: "04",
      tag: "Branding",
      titulo: "Identidade Visual",
      descricao: "Marcas com personalidade — logo, paleta, tipografia e guia de estilo para se destacar em qualquer canal.",
      resultado: "+60",
      legenda: "identidades criadas",
      destaque: false,
      cor: "#0B0C2A",
    },
  ];

  return (
    <section id="servicos" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-xs tracking-widest text-black/30 uppercase mb-3">
          Serviços
        </p>
        <h2 className="text-4xl font-bold text-[#0B0C2A] mb-16 leading-tight">
          O que a AgenLix faz <br /> pelo seu negócio
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {servicos.map((servico) => (
            <div
              key={servico.numero}
              className="rounded-xl p-8 flex flex-col gap-3"
              style={{
                border: servico.destaque
                  ? `1.5px solid ${servico.cor}`
                  : "1.5px solid rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex justify-between items-start">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    color: servico.cor,
                    background: `${servico.cor}14`,
                  }}
                >
                  {servico.tag}
                </span>
                <span
                  className="text-3xl font-bold"
                  style={{ color: servico.cor }}
                >
                  {servico.resultado}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#0B0C2A]">
                {servico.titulo}
              </h3>
              <p className="text-sm text-black/45 leading-relaxed">
                {servico.descricao}
              </p>
              <p className="text-xs text-black/30">{servico.legenda}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicos;
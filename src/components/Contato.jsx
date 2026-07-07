import { useState } from "react";

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErros({ ...erros, [e.target.name]: "" });
  }

  function validar() {
    const novosErros = {};
    if (!form.nome) novosErros.nome = "Nome obrigatório";
    if (!form.email) novosErros.email = "Email obrigatório";
    if (!form.telefone) novosErros.telefone = "Telefone obrigatório";
    if (!form.mensagem) novosErros.mensagem = "Mensagem obrigatória";
    return novosErros;
  }

  function handleSubmit() {
    const novosErros = validar();
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }
    setEnviado(true);
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  }

  return (
    <section id="contato" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-xs tracking-widest text-black/30 uppercase mb-3">
          Contato
        </p>
        <h2 className="text-4xl font-bold text-[#0B0C2A] mb-16 leading-tight">
          Vamos conversar sobre <br /> o seu projeto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="flex flex-col gap-5">

            {enviado && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-black/40 font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                className="border border-black/12 rounded-md px-4 py-3 text-sm text-[#0B0C2A] outline-none focus:border-[#4F6EF7] transition"
              />
              {erros.nome && <p className="text-xs text-red-500">{erros.nome}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-black/40 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="border border-black/12 rounded-md px-4 py-3 text-sm text-[#0B0C2A] outline-none focus:border-[#4F6EF7] transition"
              />
              {erros.email && <p className="text-xs text-red-500">{erros.email}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-black/40 font-medium">Telefone</label>
              <input
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                className="border border-black/12 rounded-md px-4 py-3 text-sm text-[#0B0C2A] outline-none focus:border-[#4F6EF7] transition"
              />
              {erros.telefone && <p className="text-xs text-red-500">{erros.telefone}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-black/40 font-medium">Mensagem</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Conte sobre seu projeto."
                rows={4}
                className="border border-black/12 rounded-md px-4 py-3 text-sm text-[#0B0C2A] outline-none focus:border-[#4F6EF7] transition resize-none"
              />
              {erros.mensagem && <p className="text-xs text-red-500">{erros.mensagem}</p>}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#0B0C2A] text-white py-4 rounded-md text-sm font-semibold hover:bg-[#1a1b3a] transition"
            >
              Enviar mensagem
            </button>

          </div>

          <div className="flex flex-col justify-center gap-10 pl-12 border-l border-black/8">
            <div>
              <p className="text-xs tracking-widest text-black/30 uppercase mb-2">Email</p>
              <p className="text-base font-medium text-[#0B0C2A]">contato@agenlix.com.br</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-black/30 uppercase mb-2">Telefone</p>
              <p className="text-base font-medium text-[#0B0C2A]">(11) 99999-9999</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-black/30 uppercase mb-2">Localização</p>
              <p className="text-base font-medium text-[#0B0C2A]">São Paulo, SP</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contato;
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const moedas = [
  { codigo: "BRL", nome: "Real" },
  { codigo: "USD", nome: "Dólar" },
  { codigo: "EUR", nome: "Euro" },
  { codigo: "GBP", nome: "Libra" },
  { codigo: "JPY", nome: "Iene" },
  { codigo: "AUD", nome: "Dólar Australiano" },
  { codigo: "CAD", nome: "Dólar Canadense" },
  { codigo: "CHF", nome: "Franco Suíço" },
  { codigo: "CNY", nome: "Yuan Chinês" },
  { codigo: "SEK", nome: "Coroa Sueca" },
  { codigo: "NZD", nome: "Dólar Neozelandês" },
  { codigo: "SGD", nome: "Dólar de Singapura" },
  { codigo: "HKD", nome: "Dólar de Hong Kong" },
  { codigo: "NOK", nome: "Coroa Norueguesa" },
  { codigo: "MXN", nome: "Peso Mexicano" },
  { codigo: "INR", nome: "Rúpia Indiana" },
  { codigo: "RUB", nome: "Rublo Russo" },
  { codigo: "ZAR", nome: "Rand Sul-Africano" },
  { codigo: "TRY", nome: "Lira Turca" },
  { codigo: "KRW", nome: "Won Sul-Coreano" },
];

export default function Contato() {
  const [valor, setValor] = useState<number | "">("");
  const [moedaOrigem, setMoedaOrigem] = useState("BRL");
  const [moedaDestino, setMoedaDestino] = useState("USD");
  const [resultado, setResultado] = useState<number | "Erro" | "-">("-");
  const [proporcao, setProporcao] = useState<number>(0);

  async function converterMoeda() {
    if (!valor || valor <= 0) return;

    try {
      const parSelecionado = `${moedaDestino}-${moedaOrigem}`;
      const res = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${parSelecionado}`
      );
      const data = await res.json();

      const chave = `${moedaDestino}${moedaOrigem}`;
      const taxa = parseFloat(data[chave].bid);

      const valorConvertido = valor * taxa;
      setResultado(valorConvertido);
      setProporcao(taxa);
    } catch (err) {
      console.error("Erro ao converter moedas:", err);
      setResultado("Erro");
      setProporcao(0);
    }
  }

  const moedaOrigemNome = moedas.find((m) => m.codigo === moedaOrigem)?.nome ?? "";
  const moedaDestinoNome = moedas.find((m) => m.codigo === moedaDestino)?.nome ?? "";

  return (
    <section
      id="contato"
      className="relative py-24 scroll-mt-24 text-white"
      style={{ background: "#017977" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h3>
          <p className="text-xl md:text-2xl mb-4 max-w-md">
            Quer saber mais sobre nossos pacotes ou tirar alguma dúvida? Preencha o formulário abaixo ou fale diretamente conosco.
          </p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nome" className="p-4 rounded-lg text-gray-900" />
            <input type="email" placeholder="Email" className="p-4 rounded-lg text-gray-900" />
            <textarea placeholder="Mensagem" className="p-4 rounded-lg text-gray-900" rows={6} />
            <Button className="bg-blue-dark hover:bg-blue-light text-white rounded-xl px-6 py-4 font-semibold mt-4">
              Enviar Mensagem
            </Button>
          </form>
        </div>

        <div className="flex flex-col gap-6 justify-start">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-10">Cotação</h3>
            <p className="text-xl md:text-2xl mb-10 max-w-md">
              Para poupar seu tempo e economizar mais, faça a cotação de qualquer moeda aqui mesmo.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-gray-900 shadow-xl w-full">
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="number"
                placeholder="Valor"
                className="p-3 rounded-lg border border-gray-300"
                value={valor}
                onChange={(e) => setValor(parseFloat(e.target.value) || "")}
              />

              <div className="flex gap-2 flex-col md:flex-row">
                <select
                  className="p-3 rounded-lg border border-gray-300 flex-1"
                  value={moedaOrigem}
                  onChange={(e) => setMoedaOrigem(e.target.value)}
                >
                  {moedas.map((m) => (
                    <option key={m.codigo} value={m.codigo}>
                      {m.nome} ({m.codigo})
                    </option>
                  ))}
                </select>

                <select
                  className="p-3 rounded-lg border border-gray-300 flex-1"
                  value={moedaDestino}
                  onChange={(e) => setMoedaDestino(e.target.value)}
                >
                  {moedas.map((m) => (
                    <option key={m.codigo} value={m.codigo}>
                      {m.nome} ({m.codigo})
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="bg-blue-dark hover:bg-blue-light text-white rounded-xl px-4 py-3 font-semibold w-full"
                onClick={converterMoeda}
              >
                Converter
              </button>
            </form>

            <div className="mt-4 space-y-2 text-lg md:text-xl font-medium text-blue-dark">
              {resultado !== "-" && resultado !== "Erro" && (
                <>
                  <p>
                    {moedaOrigemNome} ({moedaOrigem}): {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} → {moedaDestinoNome} ({moedaDestino}): {resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p>
                    1 {moedaOrigemNome} ({moedaOrigem}) → {proporcao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {moedaDestinoNome} ({moedaDestino})
                  </p>
                  <p>
                    1 {moedaDestinoNome} ({moedaDestino}) → {(1 / proporcao).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {moedaOrigemNome} ({moedaOrigem})
                  </p>
                </>
              )}
              {resultado === "Erro" && <p>Erro ao converter moedas. Tente novamente.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

// Landing page moderna, responsiva e acessível
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 pt-16 md:pt-24 pb-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 px-3 py-1 text-sm text-red-700 shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-red-600"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"/></svg>
              Estoicismo na prática
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Reflexões de Marco Aurélio
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-gray-600">
              Sabedoria atemporal comentada por Willians para clareza mental, disciplina e ação.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#citacoes"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Ler citações
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Receber reflexões
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section aria-labelledby="beneficios" className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
        <h2 id="beneficios" className="text-center text-2xl md:text-3xl font-semibold text-gray-900">Princípios que importam</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </span>
              <div>
                <h3 className="font-semibold text-lg">Clareza</h3>
                <p className="mt-1 text-gray-600">Enxergue as coisas como são. Reduza ruído e ansiedade.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5Zm0 20-8-4V9l8 4 8-4v9Z"/></svg>
              </span>
              <div>
                <h3 className="font-semibold text-lg">Disciplina</h3>
                <p className="mt-1 text-gray-600">Construa hábitos sólidos, um pequeno ato por vez.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </span>
              <div>
                <h3 className="font-semibold text-lg">Ação</h3>
                <p className="mt-1 text-gray-600">Transforme intenção em movimento com serenidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section id="citacoes" aria-labelledby="citacoes-titulo" className="relative bg-gradient-to-b from-white to-red-50/50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 id="citacoes-titulo" className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">Citações selecionadas</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <blockquote className="text-xl md:text-2xl italic font-serif text-gray-800">
                “A sua mente tomará a forma daquilo que você pensa com frequência.”
              </blockquote>
              <figcaption className="mt-4 text-right text-gray-600 font-serif">Meditações, Livro 6.16</figcaption>
            </figure>
            <figure className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <blockquote className="text-xl md:text-2xl italic font-serif text-gray-800">
                “A felicidade da sua vida depende da qualidade dos seus pensamentos.”
              </blockquote>
              <figcaption className="mt-4 text-right text-gray-600 font-serif">Meditações</figcaption>
            </figure>
            <figure className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <blockquote className="text-xl md:text-2xl italic font-serif text-gray-800">
                “Não é a morte que um homem deve temer, mas ele deve temer nunca começar a viver.”
              </blockquote>
              <figcaption className="mt-4 text-right text-gray-600 font-serif">Meditações</figcaption>
            </figure>
            <figure className="rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <blockquote className="text-xl md:text-2xl italic font-serif text-gray-800">
                “A primeira regra é manter o espírito tranquilo. A segunda é enfrentar as coisas de frente e tomá-las pelo que realmente são.”
              </blockquote>
              <figcaption className="mt-4 text-right text-gray-600 font-serif">Meditações</figcaption>
            </figure>
            <figure className="md:col-span-2 rounded-xl border border-red-100 bg-white p-6 shadow-sm">
              <blockquote className="text-xl md:text-2xl italic font-serif text-gray-800 text-center">
                “Nada de desgosto, nem de desânimo; se acabas de fracassar, recomeças.”
              </blockquote>
              <figcaption className="mt-4 text-center text-gray-600 font-serif">Meditações</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Author / About */}
      <section aria-labelledby="about" className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h2 id="about" className="text-2xl md:text-3xl font-semibold text-gray-900">Sobre o projeto</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Curadoria de passagens de Marco Aurélio, com interpretações práticas para o dia a dia.
              Direto ao ponto, sem jargões — apenas ideias úteis para pensar melhor e agir melhor.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"/><span>Conteúdo curto e aplicável</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"/><span>Leitura agradável em qualquer tela</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600"/><span>Foco em clareza, serenidade e ação</span></li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-red-600 to-rose-500 text-white flex items-center justify-center font-semibold">W</div>
                <div>
                  <p className="font-semibold text-gray-900">Willians</p>
                  <p className="text-sm text-gray-600">Comentador & Curador</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                "A filosofia é prática quando muda como respiramos diante dos desafios."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" aria-labelledby="newsletter-titulo" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-red-600/10 via-transparent to-rose-500/10" />
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-8 shadow-sm">
            <h2 id="newsletter-titulo" className="text-center text-2xl md:text-3xl font-semibold text-gray-900">Receba novas reflexões</h2>
            <p className="mt-3 text-center text-gray-600">Um e-mail ocasional com ideias valiosas. Sem spam.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">Seu e-mail</label>
              <input
                id="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="w-full flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-red-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Reflexões Estoicas. Todos os direitos reservados.</p>
          <nav aria-label="Rodapé" className="flex items-center gap-4 text-sm text-gray-700">
            <a className="hover:text-red-700" href="#beneficios">Princípios</a>
            <a className="hover:text-red-700" href="#citacoes">Citações</a>
            <a className="hover:text-red-700" href="#newsletter">Newsletter</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
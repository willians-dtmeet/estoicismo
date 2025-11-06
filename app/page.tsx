// Este é o componente da sua página inicial
export default function HomePage() {
  return (
    // O container principal da página
    // bg-gray-900 (fundo escuro) e text-white (texto branco) vêm do Tailwind
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 bg-gray-900 text-white">
      
      {/* Área de conteúdo principal, com largura máxima */}
      <div className="max-w-4xl w-full">

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-amber-400">
          Reflexões de Marco Aurélio por Willians
        </h1>

        {/* Container para as citações */}
        <div className="space-y-8">

          {/* Citação 1 (Bloco de Citação) */}
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
            <p className="text-xl md:text-2xl italic text-gray-200">
              "A sua mente tomará a forma daquilo que você pensa com frequência."
            </p>
            <footer className="text-right mt-4 text-gray-400">- Meditações, Livro 6.16</footer>
          </blockquote>

          {/* Citação 2 (Bloco de Citação) */}
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
            <p className="text-xl md:text-2xl italic text-gray-200">
              "A felicidade da sua vida depende da qualidade dos seus pensamentos."
            </p>
            <footer className="text-right mt-4 text-gray-400">- Meditações</footer>
          </blockquote>

          {/* Citação 3 (Bloco de Citação) */}
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-amber-500">
            <p className="text-xl md:text-2xl italic text-gray-200">
              "Não é a morte que um homem deve temer, mas ele deve temer nunca começar a viver."
            </p>
            <footer className="text-right mt-4 text-gray-400">- Meditações</footer>
          </blockquote>

        </div>
      </div>
    </main>
  );
}
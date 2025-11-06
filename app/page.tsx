// Este é o componente da sua página inicial
export default function HomePage() {
  return (
    // FUNDO: Trocado de 'bg-gray-900' para 'bg-white' (branco)
    // TEXTO: Trocado de 'text-white' para 'text-gray-900' (preto)
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 bg-white text-gray-900">
      
      <div className="max-w-4xl w-full">

        {/* TÍTULO */}
        {/* COR: Trocada de 'text-amber-400' para 'text-red-600' (vermelho) */}
        {/* FONTE: 'font-bold' (negrito) mantido como você pediu */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-red-600">
          Reflexões de Marco Aurélio
        </h1>

        {/* Container para as citações */}
        <div className="space-y-8">

          {/* CITAÇÃO 1 */}
          {/* FUNDO: Trocado de 'bg-gray-800' para 'bg-gray-100' (cinza claro) */}
          {/* BORDA: Trocada de 'border-amber-500' para 'border-red-600' (vermelho) */}
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            {/* FONTE: Trocamos para 'font-serif' (fácil) e 'italic' */}
            {/* COR: Trocada de 'text-gray-200' para 'text-gray-800' */}
            <p className="text-xl md:text-2xl italic font-serif text-gray-800">
              "A sua mente tomará a forma daquilo que você pensa com frequência."
            </p>
            {/* COR: Trocada de 'text-gray-400' para 'text-gray-600' */}
            <footer className="text-right mt-4 text-gray-600 font-serif">- Meditações, Livro 6.16</footer>
          </blockquote>

          {/* CITAÇÃO 2 */}
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <p className="text-xl md:text-2xl italic font-serif text-gray-800">
              "A felicidade da sua vida depende da qualidade dos seus pensamentos."
            </p>
            <footer className="text-right mt-4 text-gray-600 font-serif">- Meditações</footer>
          </blockquote>

          {/* CITAÇÃO 3 */}
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <p className="text-xl md:text-2xl italic font-serif text-gray-800">
              "Não é a morte que um homem deve temer, mas ele deve temer nunca começar a viver."
            </p>
            <footer className="text-right mt-4 text-gray-600 font-serif">- Meditações</footer>
          </blockquote>

          {/* CITAÇÃO 4 */}
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <p className="text-xl md:text-2xl italic font-serif text-gray-800">
              "A primeira regra é manter o espírito tranquilo. A segunda é enfrentar as coisas de frente e tomá-las pelo que realmente são.."
            </p>
            <footer className="text-right mt-4 text-gray-600 font-serif">- Meditações</footer>
          </blockquote>

          {/* CITAÇÃO 5 */}
          <blockquote className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <p className="text-xl md:text-2xl italic font-serif text-gray-800">
              "Nada de desgosto, nem de desânimo; se acabas de fracassar, recomeças"
            </p>
            <footer className="text-right mt-4 text-gray-600 font-serif">- Meditações</footer>
          </blockquote>

        </div>
      </div>
    </main>
  );
}
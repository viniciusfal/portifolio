export function Header() {
  return (
    <header className="flex justify-between px-10">
      <div className="text-xl font-bold">
        <span>Vinicius Silva</span>
      </div>
      <nav className="flex gap-12">
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2">
          Sobre
        </ul>
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2">
          Skills
        </ul>
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2">
          Projetos
        </ul>
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2">
          Contato
        </ul>
      </nav>
    </header>
  )
}

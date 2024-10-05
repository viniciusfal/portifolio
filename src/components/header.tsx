import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between px-20 max-md:px-8">
      <div className="text-xl font-bold">
        <span>Vinicius Silva</span>
      </div>
      <nav className="flex gap-12 max-md:gap-8 max-sm:gap-6">
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2 max-sm:text-sm">
          <Link href="#about">Sobre</Link>
        </ul>
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2 max-sm:text-sm">
          <Link href="#skills">Skills</Link>
        </ul>
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2 max-sm:text-sm">
          <Link href="#lab">Laboratorio</Link>
        </ul>
        <ul className="rounded-sm border-sky-300 text-lg text-gray-400 transition-all hover:border-b-2 max-sm:text-sm">
          <Link href="#contact">Sobre</Link>
        </ul>
      </nav>
    </header>
  )
}

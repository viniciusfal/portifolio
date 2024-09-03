import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Lab } from '@/components/lab'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <main className="mt-8">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Lab />
      <Contact />

      <footer className="bg-gray-900 py-8 text-center">
        <div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-sky-300">Vinicius Silva</span> - Design and
            Build
          </p>
        </div>
      </footer>
    </main>
  )
}

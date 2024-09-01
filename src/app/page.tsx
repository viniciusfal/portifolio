import { About } from '@/components/about'
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
    </main>
  )
}

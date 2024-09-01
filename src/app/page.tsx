import { About } from '@/components/about'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <main className="mt-8">
      <Header />
      <Hero />
      <About />
    </main>
  )
}

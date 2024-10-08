import { SquareMinus } from 'lucide-react'
import { CarouselLabs } from './carousel-labs'

export function Lab() {
  return (
    <section className="min-h-screen px-20 max-md:px-8 max-sm:pt-8" id="lab">
      <div className="mb-14 flex items-center justify-center gap-2">
        <SquareMinus className="size-4 animate-pulse text-sky-300" />
        <h2 className="text-2xl font-bold">LABORATORIO</h2>
      </div>
      <CarouselLabs />
    </section>
  )
}

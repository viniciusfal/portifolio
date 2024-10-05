import { SquareMinus } from 'lucide-react'
import lab1 from '@/assets/lab-1.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import Image from 'next/image'

export function Lab() {
  return (
    <section className="min-h-screen px-20 max-md:px-8" id="lab">
      <div className="mb-14 flex items-center justify-center gap-2">
        <SquareMinus className="size-4 text-sky-300" />
        <h2 className="text-2xl font-bold">LABORATORIO</h2>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 px-10 max-md:grid-cols-1">
        {Array.from({ length: 6 }).map((c, index) => (
          <Card key={index} className="bg-gray-700/50">
            <Carousel className="">
              <CarouselContent>
                <CarouselItem>
                  <CardHeader>
                    <div>
                      <Image
                        src={lab1}
                        alt="Cashback APP Image"
                        className="rounded"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="text-sm text-gray-100">
                      Cashback Bus
                    </CardTitle>
                    <CardDescription className="text-xs">
                      Aplicação de cashback
                    </CardDescription>
                  </CardContent>
                </CarouselItem>

                <CarouselItem>
                  <CardHeader>
                    <CardTitle className="text-white">BCO - Web site</CardTitle>
                    <CardDescription>
                      Aplicação feita para empresa de onibus cumprir bla bla
                      bla... e reticencias e tal e coisa e tal
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex gap-2">
                    <div className="rounded-lg border border-sky-300 px-3 py-1 text-xs text-sky-300">
                      Typescript
                    </div>
                    <div className="rounded-lg border border-sky-300 px-3 py-1 text-xs text-sky-300">
                      Typescript
                    </div>
                    <div className="rounded-lg border border-sky-300 px-3 py-1 text-xs text-sky-300">
                      Typescript
                    </div>
                  </CardContent>
                  <CardFooter>
                    <button className="w-full rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-800/90">
                      Acessar
                    </button>
                  </CardFooter>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious
                variant="ghost"
                className="text-gray-800 hover:bg-sky-300"
              />
              <CarouselNext
                variant="ghost"
                className="text-gray-800 hover:bg-sky-300"
              />
            </Carousel>
          </Card>
        ))}
      </div>
    </section>
  )
}

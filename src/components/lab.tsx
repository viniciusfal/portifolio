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
    <section className="h-screen px-20">
      <div className="mb-14 flex items-center justify-center gap-2">
        <SquareMinus className="size-4 text-sky-300" />
        <h2 className="text-2xl font-bold">LABORATORIO</h2>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 px-10">
        {Array.from({ length: 6 }).map((c, index) => (
          <Carousel key={index} className="relative h-[300px] w-[360px]">
            <div className="absolute -top-1 left-9 h-1/2 w-[300px] rounded-xl bg-sky-300 max-2xl:left-5 max-2xl:w-[75%]"></div>
            <CarouselContent className="px-3 py-2">
              <CarouselItem className="">
                <Card className="bg-gray-700 text-white">
                  <CardHeader>
                    <Image src={lab1} alt="projeto" className="h-24 rounded" />
                    <CardDescription className="pt-3 text-white">
                      BCO
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="text-sm text-gray-400">
                    Aplicação skmdskdn eunwjn que s jenwujnmd djsnjdsl
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="bg-gray-700 text-white">
                  <CardHeader>
                    <CardTitle>BCO - Web site</CardTitle>
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
                    <button className="w-full rounded bg-gray-800 px-4 py-2 hover:bg-gray-800/90">
                      Acessar
                    </button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="border-none bg-transparent hover:bg-sky-300 hover:text-gray-800" />
            <CarouselNext className="border-none bg-transparent hover:bg-sky-300 hover:text-gray-800" />
          </Carousel>
        ))}
      </div>
    </section>
  )
}

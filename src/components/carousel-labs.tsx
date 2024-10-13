import lab1 from '@/assets/1.jpg'
import lab2 from '@/assets/2.jpg'
import lab3 from '@/assets/3.jpg'
import lab4 from '@/assets/4.jpg'
import lab5 from '@/assets/5.jpg'
import lab6 from '@/assets/6.jpg'
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
import Link from 'next/link'

export function CarouselLabs() {
  const data = [
    {
      bg: lab1,
      title: 'Web Site - BCO System',
      description:
        'Aplicação de BCO e BTC que resolve dilemas comuns do dia a dia de uma empresa que trabalha com bilhetagem. O Objetivo é otimizar o processo de preenchimento de informações, calcular roleta e gerar o relatorio.',
      techs: ['Typescript', 'NextJS', 'TailwindCSS'],
      href: 'https://bco-public.vercel.app',
    },
    {
      bg: lab2,
      title: 'Web Site - Github Explorer',
      description:
        'O Objetivo é aplicar apis externas. No caso o app usa a api do github para visualizações de repositorios.',
      techs: ['Typescript', 'ReactJS', 'Styled-components'],
      href: 'https://github.com/viniciusfal/GitHub-explorerRepo',
    },
    {
      bg: lab3,
      title: 'Full Stack - Cashback Bus',
      description:
        'Um Sistema de cashback para passagens de onibus, que funciona de maneira dinamica e em sintonia com sistemas de gerenciamento de empresas de transporte (ex: Transdata).',
      techs: [
        'Typescript',
        'NodeJS',
        'PrismaORM',
        'Docker',
        'PostgreSQL',
        'ReactJS',
        'TailwindCSS',
        'Shadcn/UI',
      ],
      href: 'https://github.com/viniciusfal/cashback',
    },
    {
      bg: lab4,
      title: 'Desktop App - Sales C',
      description:
        'Esse é um app de controle de estoque e registro de transações(entradas e saídas), personalizado para uma loja de sapatos.',
      techs: ['Java', 'Java Swing', 'MySQL'],
      href: 'https://github.com/viniciusfal/SalesC',
    },
    {
      bg: lab5,
      title: 'Full Stack - Erp Net',
      description:
        'Aplicação completa para gerenciamento de uma empresa. Compartilho aqui o modulo  do Financeiro e o seu Dashboard.',
      techs: [
        'Go',
        'Gin Gonic',
        'Docker',
        'PostgreSQL',
        'Typescript',
        'ReactJS',
        'TailwindCSS',
        'Shadcn/UI',
      ],
      href: 'https://github.com/viniciusfal/erp',
    },
    {
      bg: lab6,
      title: 'Web site - Marcenaria do Naldo',
      description:
        'Landing page de uma marcenaria, com design moderno e conteudo compacto.',
      techs: ['Typescript', 'ReactJS', 'TailwindCSS'],
      href: '#',
    },
  ]
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 px-10 max-lg:grid-cols-1">
      {data.map((d, index) => (
        <Card className="bg-gray-700/50" key={index}>
          <Carousel className="">
            <CarouselContent>
              <CarouselItem>
                <CardHeader>
                  <div>
                    <Image
                      src={d.bg}
                      alt="Cashback APP Image"
                      className="rounded"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle className="text-sm text-gray-100">
                    {d.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {d.description}
                  </CardDescription>
                </CardContent>
              </CarouselItem>

              <CarouselItem className="flex flex-col justify-around">
                <CardHeader>
                  <CardTitle className="mb-2 text-white">{d.title}</CardTitle>
                  <CardDescription className="text-base">
                    {d.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {d.techs.map((t, indexT) => (
                    <div
                      key={indexT}
                      className="rounded-lg border border-sky-300 px-3 py-1 text-xs text-sky-300"
                    >
                      {t}
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link target="blank" href={d.href} className="w-full">
                    <button className="w-full rounded bg-gray-800 px-4 py-2 text-sky-300 hover:bg-gray-800/90">
                      Acessar
                    </button>
                  </Link>
                </CardFooter>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious
              variant="ghost"
              className="text-sky-300 hover:bg-sky-300"
            />
            <CarouselNext
              variant="ghost"
              className="text-sky-300 hover:bg-sky-300"
            />
          </Carousel>
        </Card>
      ))}
    </div>
  )
}

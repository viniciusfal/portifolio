import Image from 'next/image'
import { Linkedin, Mail, SquareMinus } from 'lucide-react'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-around bg-gray-700/20 max-sm:flex-col max-sm:px-8"
    >
      <div className="flex flex-col items-center gap-4 max-sm:order-2 max-sm:py-4">
        <div className="rounded-full border-4 border-sky-300 p-2 hover:border-sky-400">
          <Image
            src="https://avatars.githubusercontent.com/u/74741895?v=4"
            width={200}
            height={200}
            alt="profile Image"
            className="rounded-full max-md:size-24"
          />
        </div>

        <strong className="text-bold mt-4 text-xl">Vinicius Silva</strong>

        <div className="flex gap-6 max-sm:gap-6">
          <Link href="#contact">
            <Mail className="size-7 text-sky-300 transition-colors hover:text-sky-400" />
          </Link>
          <Link href="https://github.com/viniciusfal" target="_blank">
            <GitHubLogoIcon className="size-7 text-sky-300 transition-colors hover:text-sky-400" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/vinicius-dev-silva"
            target="_blank"
          >
            <Linkedin className="size-7 text-sky-300 transition-colors hover:text-sky-400" />
          </Link>
        </div>
      </div>

      <div className="flex w-1/2 flex-col gap-6 max-md:pt-8 max-sm:w-full max-sm:gap-1">
        <div className="mb-10 flex items-center gap-2 max-sm:justify-center">
          <SquareMinus className="size-4 text-sky-300 animate-pulse" />
          <h2 className="text-2xl font-bold">SOBRE</h2>
        </div>

        <strong className="text-xl max-sm:mb-2">
          Conheça um pouco sobre mim
        </strong>
        <p className="text-gray-400 max-md:text-sm">
          Sou um desenvolvedor Full Stack, criando aplicações desde o final de
          2020. Minha trajetória inclui experiências na área de T.I, onde
          adquiri uma compreensão profunda sobre como a tecnologia pode resolver
          problemas e otimizar processos em diversos setores. Atualmente, estou
          cursando Engenharia de Software, o que me proporciona fundamentos
          robustos para a construção de sistemas eficientes e escaláveis. Também
          fui aluno da Rocketseat, onde tive a oportunidade de me aprofundar em
          tecnologias modernas e práticas de desenvolvimento ágeis.
          <br />
          <br />
          Estou focado em JavaScript, TypeScript e Go, mas também tenho
          experiência em Java. Adoro enfrentar desafios técnicos e buscar
          soluções inovadoras que melhorem a experiência do usuário. Acredito
          que a tecnologia é uma poderosa ferramenta para transformar
          realidades, e cada projeto que desenvolvo reflete essa visão.
          <br />
          <br />
          Explore meu portfólio e conheça mais sobre minha jornada, onde paixão,
          aprendizado contínuo e inovação se encontram.
        </p>
      </div>
    </section>
  )
}

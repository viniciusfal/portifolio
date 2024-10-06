import heroImg from '@/assets/hero.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-between px-20 max-md:px-8"
    >
      <div className="absolute mb-20 ml-32 h-full w-[1080px] items-center rounded-full bg-sky-400/10 blur-3xl"></div>
      <div className="w-1/2 space-y-1 pb-5 max-md:w-full">
        <strong className="text-sky-300">DESENVOLVEDOR FULL-STACK</strong>
        <h1 className="pb-1 text-5xl font-semibold">Vinicius Silva</h1>
        <p className="pb-5 pt-2 text-gray-400">
          Sou um desenvolvedor Full Stack com experiência em JavaScript,
          TypeScript e em Go. Explore meus projetos e descubra como paixão e
          criatividade moldam minha trajetória no mundo da tecnologia.
        </p>

        <a
          href="./curriculo.pdf"
          download="curriculo.pdf"
          className="rounded border-2 border-sky-300 px-8 py-2 text-sky-300 transition-colors hover:cursor-pointer hover:border-white hover:bg-sky-300 hover:text-white"
        >
          BAIXAR CURRÍCULO
        </a>
      </div>

      <div className="max-md:hidden">
        <Image src={heroImg} alt="hero image" />
      </div>
    </section>
  )
}

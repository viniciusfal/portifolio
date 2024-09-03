import heroImg from '@/assets/hero.svg'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-between px-20">
      <div className="absolute mb-20 ml-32 h-full w-[1080px] items-center rounded-full bg-sky-400/10 blur-3xl"></div>
      <div className="w-1/2 space-y-1 pb-5">
        <strong className="text-sky-300">DESENVOLVEDOR FULL-STACK</strong>
        <h1 className="pb-1 text-5xl font-semibold">Vinicius Silva</h1>
        <p className="pb-5 pt-2 text-gray-400">
          Desenvolvedor full stack com experiencia linguagem Javascript /
          Typescript e em desenvolvimento Backend em Go lang. Conheça mais sobre
          os meu projetos e como paixão e criatividade fazem parte da minha
          caminhada.
        </p>

        <button className="rounded border-2 border-sky-300 px-8 py-2 text-sky-300 transition-colors hover:border-white hover:bg-sky-300 hover:text-white">
          BAIXAR CURRÍCULO
        </button>
      </div>

      <div className="">
        <Image src={heroImg} alt="hero image" />
      </div>
    </section>
  )
}

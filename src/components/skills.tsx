import { SquareMinus } from 'lucide-react'
import Image from 'next/image'
import nextjsimg from '@/assets/next-js.svg'
import svelteimg from '@/assets/svelte.svg'
import nodeimg from '@/assets/node-js.svg'
import goimg from '@/assets/golang.svg'

export function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col justify-center gap-10 px-20 max-sm:px-2"
    >
      <div>
        <div className="mb-14 flex items-center justify-center gap-2">
          <SquareMinus className="size-4 text-sky-300" />
          <h2 className="text-2xl font-bold">SKILLS</h2>
        </div>

        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">Typescript</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/5968/5968381.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="typescript"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[90%] rounded-full bg-[#2e78c7]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">React</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/4969/4969244.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="React"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[80%] rounded-full bg-[#009dff]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">Next.JS</span>
            <Image src={nextjsimg} alt="nextjs" width={50} height={50} />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[65%] rounded-full bg-[#000000]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">Sveltekit</span>
            <Image src={svelteimg} alt="Svelte" width={50} height={50} />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[50%] rounded-full bg-[#ff4000]"></div>
            </div>
          </div>
        </div>
      </div>
      {/** Segunda Linha de Skills */}
      <div>
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">Node</span>
            <Image src={nodeimg} alt="nodejs" width={50} height={50} />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[80%] rounded-full bg-[#539e42]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">PostgreSQL</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/5968/5968342.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="postgresql"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[60%] rounded-full bg-[#31668c]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">Go</span>
            <Image src={goimg} alt="go-lang" width={50} height={50} />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[40%] rounded-full bg-[#8ec7e8]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">Docker</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/919/919853.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="docker"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div className="h-2.5 w-[70%] rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

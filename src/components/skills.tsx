import { SquareMinus } from 'lucide-react'
import Image from 'next/image'
import nextjsimg from '@/assets/next-js.svg'
import svelteimg from '@/assets/svelte.svg'
import nodeimg from '@/assets/node-js.svg'
import goimg from '@/assets/golang.svg'

export function Skills() {
  const data = [
    {
      name: 'typescript',
      image:
        'https://cdn-icons-png.freepik.com/256/5968/5968381.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '90%',
    },
    {
      name: 'React',
      image:
        'https://cdn-icons-png.freepik.com/256/4969/4969244.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '80%',
    },
    {
      name: 'Next',
      image: nextjsimg,
      nivel: '65%',
    },
    {
      name: 'Sveltekit',
      image: svelteimg,
      nivel: '50%',
    },
    {
      name: 'Node',
      image: nodeimg,
      nivel: '80%',
    },
    {
      name: 'Go',
      image: goimg,
      nivel: '65%',
    },
    {
      name: 'PostgreSQL',
      image:
        'https://cdn-icons-png.freepik.com/256/5968/5968342.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '70%',
    },
    {
      name: 'Docker',
      image:
        'https://cdn-icons-png.freepik.com/256/919/919853.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '70%',
    },
  ]
  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col justify-center gap-10 px-20 max-sm:px-2 max-sm:pt-8"
    >
      <div className="mb-14 flex items-center justify-center gap-2">
        <SquareMinus className="size-4 text-sky-300" />
        <h2 className="text-2xl font-bold">SKILLS</h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-8 max-sm:grid-cols-3 max-sm:grid-rows-3">
        {data.map((s, index) => (
          <div className="flex flex-col items-center space-y-3" key={index}>
            <span className="text-bold text-sm text-gray-400">{s.name}</span>
            <Image src={s.image} alt="typescript" width={50} height={50} />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div
                className="h-2.5 rounded-full bg-[#2e78c7]"
                style={{ width: s.nivel }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

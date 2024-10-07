import { SkillsLabs } from '@/services/skills-lab'
import { SquareMinus } from 'lucide-react'
import Image from 'next/image'


export function Skills() {
  const data = SkillsLabs()
  return (
    <section
      id="skills"
      className="flex min-h-screen flex-col justify-center gap-10 px-20 max-sm:px-2 max-sm:pt-8"
    >
      <div className="mb-14 flex items-center justify-center gap-2">
        <SquareMinus className="size-4 text-sky-300 animate-pulse" />
        <h2 className="text-2xl font-bold">SKILLS</h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-8 max-sm:grid-cols-3 max-sm:grid-rows-3">
        {data.map((s, index) => (
          <div className="flex flex-col items-center space-y-3" key={index}>
            <span className="text-bold text-sm text-gray-400">{s.name}</span>
            <Image src={s.image} alt="typescript" width={50} height={50} />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-900">
              <div
                className="h-2.5 rounded-full"
                style={{ width: s.nivel, background: s.bg }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

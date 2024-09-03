import { SquareMinus } from 'lucide-react'
import Image from 'next/image'

export function Skills() {
  return (
    <section className="flex h-screen flex-col justify-center gap-10 px-20">
      <div>
        <div className="mb-14 flex items-center justify-center gap-2">
          <SquareMinus className="size-4 text-sky-300" />
          <h2 className="text-2xl font-bold">SKILLS</h2>
        </div>

        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
      {/** Segunda Linha de Skills */}
      <div>
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-bold text-sm text-gray-400">CSS</span>
            <Image
              src="https://cdn-icons-png.freepik.com/256/11516/11516361.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid"
              alt="css"
              width={50}
              height={50}
            />

            <div className="h-2.5 w-[100px] rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-2.5 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

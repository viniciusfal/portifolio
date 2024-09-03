import Image from 'next/image'
import { Linkedin, Mail, SquareMinus } from 'lucide-react'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export function About() {
  return (
    <section className="flex h-screen items-center justify-around bg-gray-700/20">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border-4 border-sky-300 p-2 hover:border-sky-400">
          <Image
            src="https://avatars.githubusercontent.com/u/74741895?v=4"
            width={200}
            height={200}
            alt="profile Image"
            className="rounded-full"
          />
        </div>

        <strong className="text-bold mt-4 text-xl">Vinicius Silva</strong>

        <div className="flex gap-6">
          <Link href="#">
            <Mail className="size-7 text-sky-300 transition-colors hover:text-sky-400" />
          </Link>
          <Link href="#">
            <GitHubLogoIcon className="size-7 text-sky-300 transition-colors hover:text-sky-400" />
          </Link>

          <Link href="#">
            <Linkedin className="size-7 text-sky-300 transition-colors hover:text-sky-400" />
          </Link>
        </div>
      </div>

      <div className="flex w-1/2 flex-col gap-6">
        <div className="mb-10 flex items-center gap-2">
          <SquareMinus className="size-4 text-sky-300" />
          <h2 className="text-2xl font-bold">SOBRE</h2>
        </div>

        <strong className="text-xl">Conheça um pouco sobre mim</strong>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus.
          <br />
          <br />
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Curabitur
          pretium tincidunt lacus.
        </p>
      </div>
    </section>
  )
}

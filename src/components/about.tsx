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

      <div className="flex w-1/2 flex-col gap-6 max-sm:w-full max-sm:gap-1">
        <div className="mb-10 flex items-center gap-2">
          <SquareMinus className="size-4 text-sky-300" />
          <h2 className="text-2xl font-bold">SOBRE</h2>
        </div>

        <strong className="text-xl max-sm:mb-2">
          Conheça um pouco sobre mim
        </strong>
        <p className="text-gray-400 max-md:text-sm">
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

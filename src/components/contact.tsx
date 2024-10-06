import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Linkedin, Mail, Phone, SquareMinus } from 'lucide-react'
import Link from 'next/link'

export function Contact() {
  return (
    <section id="contact" className="min-h-1/2 mt-12 px-20 pb-10 max-md:px-8">
      <div className="mb-14 flex items-center justify-center gap-2">
        <SquareMinus className="size-4 text-sky-300" />
        <h2 className="text-2xl font-bold">Contato</h2>
      </div>

      <div className="leading-6 text-gray-400">
        <p>Entre em contato!</p>
        <p>
          Abaixo estão algumas maneiras de me contatar. Estou disponível todos
          os dias e ficarei feliz em conversar com você.
        </p>
      </div>

      <div className="mt-12 flex justify-between max-sm:flex-col">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Phone className="size-6 text-sky-300" />
            <Link
              href="https://wa.me/5561999829196"
              target="_blank"
              className="text-gray-400"
            >
              (61) 9 9982-9196
            </Link>
          </div>

          <div className="max-sm: flex items-center gap-2">
            <Mail className="size-6 text-sky-300" />
            <span className="text-gray-400">vinicius_prsilva@hotmail.com</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <GitHubLogoIcon className="size-6 text-sky-300" />
            <Link
              href="https://github.com/viniciusfal"
              className="text-gray-400"
              target="_blank"
            >
              https://github.com/viniciusfal
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Linkedin className="size-6 text-sky-300" />
            <Link
              href="https://www.linkedin.com/in/vinicius-dev-silva"
              className="text-gray-400"
              target="_blank"
            >
              https://www.linkedin.com/in/vinicius-dev-silva
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

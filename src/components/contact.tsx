import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Linkedin, Mail, Phone, SquareMinus } from 'lucide-react'

export function Contact() {
  return (
    <section className="h-1/2 px-20 pb-10">
      <div className="mb-14 flex items-center justify-center gap-2">
        <SquareMinus className="size-4 text-sky-300" />
        <h2 className="text-2xl font-bold">Contato</h2>
      </div>

      <div className="leading-6 text-gray-400">
        <p>
          kdsajkdmsaçldlma vontade fde tslklatpksrmçlfa,vça comoigo
          kdsajkdmsaçldlma vontade fde tslklatpksrmçlfa,vça comoigo.
        </p>
        <p>disponivel todos os dias</p>
      </div>

      <div className="mt-12 flex justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Phone className="size-6 text-sky-300" />
            <span className="text-gray-400">(61) 9 9982-9196</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="size-6 text-sky-300" />
            <span className="text-gray-400">vinicius_prsilva@hotmail.com</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <GitHubLogoIcon className="size-6 text-sky-300" />
            <span className="text-gray-400">
              https://github.com/viniciusfal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Linkedin className="size-6 text-sky-300" />
            <span className="text-gray-400">
              https://www.linkedin.com/in/vinicius-dev-silva
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

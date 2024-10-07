import nextjsimg from '@/assets/next-js.svg'
import svelteimg from '@/assets/svelte.svg'
import nodeimg from '@/assets/node-js.svg'
import goimg from '@/assets/golang.svg'

export function SkillsLabs() {
  const data = [
    {
      name: 'typescript',
      image:
        'https://cdn-icons-png.freepik.com/256/5968/5968381.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '90%',
      bg: '#327ac7',
    },
    {
      name: 'React',
      image:
        'https://cdn-icons-png.freepik.com/256/4969/4969244.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '80%',
      bg: '#009dff',
    },
    {
      name: 'Next',
      image: nextjsimg,
      nivel: '65%',
      bg: '#000000',
    },
    {
      name: 'Sveltekit',
      image: svelteimg,
      nivel: '50%',
      bg: '#ff4000',
    },
    {
      name: 'Node',
      image: nodeimg,
      nivel: '80%',
      bg: '#539e42',
    },
    {
      name: 'Go',
      image: goimg,
      nivel: '65%',
      bg: '#8ec7e8',
    },
    {
      name: 'PostgreSQL',
      image:
        'https://cdn-icons-png.freepik.com/256/5968/5968342.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '70%',
      bg: '#31688f',
    },
    {
      name: 'Docker',
      image:
        'https://cdn-icons-png.freepik.com/256/919/919853.png?uid=R83742443&ga=GA1.1.717702223.1725141806&semt=ais_hybrid',
      nivel: '70%',
      bg: '#006cc4',
    },
  ]

  return data
}

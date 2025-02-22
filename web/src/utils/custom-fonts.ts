import { Montserrat, Oxanium } from 'next/font/google'

// definindo as fontes
const oxanium = Oxanium({
  weight: ['500', '600'], 
  subsets: ['latin'], // quais subsets serão utilizados
  variable: '--font-oxanium'// qual é o nome da variável que será utiliazda para aplicar esta fonte
})

const montserrat = Montserrat({
  weight: ['400', '600'], 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export {
  oxanium,
  montserrat
}
import { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  isIconButton?: boolean
}


export function Button({children, isIconButton = false}: ButtonProps){
  return ( isIconButton ? (
        <button 
            className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-500"
          >
          {children}
        </button>
      ) : (
        <button 
          className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-500"
        >
          {children}
        </button>
      )    
  )
}
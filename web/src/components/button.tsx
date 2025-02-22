interface ButtonProps {
  text: string
}


export function Button({text}: ButtonProps){
  return(
    <button className="px-5 py-2 rounded-sm">{text}</button>
  )
}
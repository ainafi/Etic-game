import React from "react"
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
type ButtonProps = {
    name: string
}
const Button:React.FC<ButtonProps> = ({name}) => {
  return (
    <div className="">
        <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center px-10 space-x-2 text-white bg-red-500 hover:ease-out hover:duration-75 hover hover:bg-white hover:text-black hover:border-none"
            >
              
                <span>{name}</span>
            </HoverBorderGradient>
    </div>
  )
}

export default Button
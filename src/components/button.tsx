import React from "react"

type ButtonProps = {
    name: string
}
const Button:React.FC<ButtonProps> = ({name}) => {
  return (
    <div className="border border-[#EFECEC]  px-1 py-1 rounded-lg">
        <button className="text-white bg-[#B8001F] w-[100px] h-[40px] rounded-lg"> 
            {name}
        </button>
    </div>
  )
}

export default Button
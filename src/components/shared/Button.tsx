import { FC } from "react"
import Link from "next/link"


const Botton:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-[#0d768b] text-white px-7 py-4 rounded-full hover:shadow-lg
    text-xl font-medium hover:scale-105 duration-300 
    ">{text}
    
    </button>
  )
}

export default Botton



// const Botton:FC<{text:string}> = ({text}) => {
//   return (
//     <button className="bg-[#00616C] text-white px-7 py-4 rounded-full hover:shadow-lg
//     text-xl font-medium hover:scale-105 duration-300 
//     ">{text}</button>
//   )
// }

// export default Botton
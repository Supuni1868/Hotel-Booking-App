import React from 'react'

const Title = ({title, subTitle, align, font, color}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" ? "md:items-start md:text-left" : ""}`}>

     <h1 className={`text-5xl md:text-6xl ${font || "font-playfair"} ${color === 'white' ? 'text-white' : 'text-black'}`}>{title}</h1> 

     <p className={`text-base md:text-xl mt-2 max-w-174 ${color === 'white' ? 'text-white' : 'text-gray-900'}`}>{subTitle}</p>
    </div>
  )
}

export default Title

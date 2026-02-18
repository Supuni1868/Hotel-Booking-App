import React from 'react'

const Title = ({title, subTitle, align, font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" ? "md:items-start md:text-left" : ""}`}>

     <h1 className={`text-5xl md:text-6xl ${font || "font-playfair"} text-black`}>{title}</h1> 

     <p className='text-base md:text-xl text-gray-900 mt-2 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title

import React from 'react'

const Heading = ({text, className}) => {
  return (
    <h2 className={className + " text-stone-950 text-2xl font-bold"}>{text}</h2>
  )
}

export default Heading

import React from 'react'

const Title = ({children, className = null}) => {
  return (
    <section className="w-full py-10">
        <div className="container mx-auto">
            <h2 className={className + " text-5xl text-stone-950 font-semibold text-center md:text-left"}>{children}</h2>
        </div>
    </section>
  )
}

export default Title

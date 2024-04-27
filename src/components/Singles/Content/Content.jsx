import React from 'react';

const Content = ({ getContent, className = null }) => {
  return (
    <section className={className + ' w-full'}>
      <div className="container mx-auto">
        <div className="bg-white rounded-md p-5">
          <p className="text-stone-700 text-lg">{getContent}</p>
        </div>
      </div>
    </section>
  )
}

export default Content
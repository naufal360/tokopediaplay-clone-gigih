import React from 'react'

function ProductsCard({title, link, price, url_thumbnail}) {
  return (
    <a href={link} target='_blank'>
      <div className='flex-shrink-0 w-52 bg-slate-200 rounded-md overflow-hidden'>
          <img src={url_thumbnail} alt="" />
          <h2 className='text-gray-950'>{title}</h2>
          <h2 className='text-gray-950'>Rp {price}</h2>
      </div>
    </a>
  )
}

export default ProductsCard
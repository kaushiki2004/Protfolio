import React from 'react'
import { abilities } from '../constants'
import { div } from 'three/tsl'


const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
        <div className='my-20 mx-auto grid-3-cols'>
            {abilities.map(({imgPath,title,desc})=>(
                <div key ={title} className='card-border rounded-xl p-8 flexflex-col gap-4'>
                    <div className='size-14 flex item-center justify-center rounded-full'>
                        <img src={imgPath} alt={title} />
                    </div>
                    <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                    <p className='text-white-50 text-lg'>{desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards
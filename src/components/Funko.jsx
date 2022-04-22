import { useState } from 'react'
import getWhishlistFunkos from '../services/getWhishlistFunkos'
import storeWishlistFunko from '../services/storeWishlistFunko'
import deleteWishlistFunko from '../services/deleteWishlistFunko'
import buyFunko from '../services/buyFunko'
import Button from './Button'

export default function Funko ({ funko }) {
  const [whislist, setWishlist] = useState(getWhishlistFunkos())

  const handleAddToWishlist = (funko) => {
    storeWishlistFunko(funko)
    setWishlist(getWhishlistFunkos())
  }

  const handleRemoveFromWishlist = (funko) => {
    deleteWishlistFunko(funko)
    setWishlist(getWhishlistFunkos())
  }

  const handleBuyFunko = (funko) => {
    buyFunko(funko)
    setWishlist(getWhishlistFunkos())
  }

  return (
    <div class='w-full sm:w-1/2 lg:w-1/3 px-6 mb-16'>
      <div class='flex flex-col h-full'>
        <div class='relative w-full overflow-hidden mb-4'>
          <img src={funko.image} alt={funko.name} className='object-cover w-full h-full' />
          {funko.isBought && <span className='absolute top-0 left-0 text-xs bg-gray-900 text-white px-2 py-1 rounded-full mb-2'>Ya es mio!</span>}
        </div>
        <div class='flex flex-col flex-grow inset-0'>
          <span className='mb-3'>{funko.name}</span>
          <div class='mt-auto'>
            {(funko.link && !funko.isBought) &&
              <a href={funko.link} target='_blank' className='text-xs bg-red-600 text-white px-2 py-1 rounded-full mt-2' rel='noreferrer'>
                Comprar en Amazon
              </a>}
            {
            whislist.includes(funko)
              ? (
                <div>
                  <Button onClick={() => handleRemoveFromWishlist(funko)}>Quitar de mi colección</Button>
                  {
                    !funko.isBought
                      ? <Button onClick={() => handleBuyFunko(funko)}>Marcar como comprado</Button>
                      : <Button onClick={() => handleBuyFunko(funko)}>Marcar como no comprado</Button>
                  }
                </div>
                )
              : <Button onClick={() => handleAddToWishlist(funko)} color='dark-gray'>Añadir a mi colección</Button>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

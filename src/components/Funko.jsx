import { useState } from 'react'
import getWhishlistFunkos from '../services/getWhishlistFunkos'
import storeWishlistFunko from '../services/storeWishlistFunko'
import deleteWishlistFunko from '../services/deleteWishlistFunko'
import buyFunko from '../services/buyFunko'

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
    <div key={funko.id} className='w-1/3 mb-12 px-4 flex flex-col items-center'>
      {funko.isBought && <span className='text-xs bg-gray-900 text-white px-2 py-1 rounded-full mb-2'>Ya es mio!</span>}
      <img src={funko.image} alt={funko.name} className='mb-4' />
      {funko.name}
      {(funko.link && !funko.isBought) && <a href={funko.link} target='_blank' className='text-xs bg-red-600 text-white px-2 py-1 rounded-full mt-2' rel='noreferrer'>Comprar en Amazon</a>}
      {
        whislist.includes(funko)
          ? (
            <div>
              <button className='bg-gray-500 px-3 py-2 block w-full text-sm text-white rounded-lg mt-2' onClick={() => handleRemoveFromWishlist(funko)}>Quitar de mi colección</button>
              {
                !funko.isBought
                  ? <button className='bg-gray-500 px-3 py-2 block w-full text-sm text-white rounded-lg mt-2' onClick={() => handleBuyFunko(funko)}>Marcar como comprado</button>
                  : <button className='bg-gray-500 px-3 py-2 block w-full text-sm text-white rounded-lg mt-2' onClick={() => handleBuyFunko(funko)}>Marcar como no comprado</button>
              }
            </div>
            )
          : <button className='bg-gray-700 px-3 py-2 block w-full text-sm text-white rounded-lg mt-2' onClick={() => handleAddToWishlist(funko)}>Añadir a mi colección</button>
      }
    </div>
  )
}

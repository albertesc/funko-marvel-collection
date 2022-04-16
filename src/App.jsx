import { useEffect, useState } from 'react'
import getWhishlistFunkos from './services/getWhishlistFunkos'
import getAllCollections from './services/getAllCollections'
import getFunkosByCollection from './services/getFunkosByCollection'
import storeWishlistFunko from './services/storeWishlistFunko'
import deleteWishlistFunko from './services/deleteWishlistFunko'
import buyFunko from './services/buyFunko'

export default function App () {
  const collections = getAllCollections()
  const [whislist, setWishlist] = useState(getWhishlistFunkos())
  const [selectedCollection, setSelectedCollection] = useState([])
  const [selectedOption, setSelectedOption] = useState(collections[0])

  useEffect(() => {
    setSelectedCollection(getFunkosByCollection(selectedOption))
  }, [])

  const handleAddToWishlist = (funko) => {
    storeWishlistFunko(funko)
    setWishlist(getWhishlistFunkos())
  }

  const handleRemoveFromWishlist = (funko) => {
    deleteWishlistFunko(funko)
    setSelectedCollection(getFunkosByCollection(selectedOption))
    setWishlist(getWhishlistFunkos())
  }

  const handleBuyFunko = (funko) => {
    buyFunko(funko)
    setWishlist(getWhishlistFunkos())
  }

  return (
    <div className='App'>
      <header className='h-16 mb-6'>
        <div className='container md:max-w-3xl h-full flex items-center justify-between'>
          <h1 className='text-xl'><span className='font-bold'>FunkoPop!</span>Marvel</h1>
          <nav className='flex space-x-8'>
            <a href='#'>Colecciones</a>
            <a href='#' className='relative'>Mi colección <span className='absolute left-full -top-1 text-xs bg-gray-500 flex items-center justify-center w-5 h-5 ml-1 rounded-full text-white'>{whislist.length}</span></a>
          </nav>
        </div>
      </header>

      <div className='container md:max-w-3xl'>
        <p className='text-lg'>Esta es una aplicación para la organización de tu colección de FunkoPop! Sobre Marvel.<br />Esta aplicación esta desarrollada solo para fines educativos.</p>

        <div className='my-6 text-xl font-semibold flex items-center mb-10'>Colección:
          <span className='flex items-center ml-4 w-auto border border-gray-700 px-3 py-1 rounded-md'>
            <select className='focus:outline-none appearance-none' value={selectedOption} onChange={e => { setSelectedCollection(getFunkosByCollection(e.target.value)); setSelectedOption(e.target.value) }}>
              {collections.length !== null && collections.map(collection => (
                <option key={collection} value={collection}>{collection}</option>
              ))}
            </select>
            <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
          </span>
        </div>

        <ul className='flex flex-wrap items-center -mx-4 mb-16'>
          {selectedCollection !== null && selectedCollection.map(funko => (
            <li key={funko.id} className='w-1/3 mb-12 px-4 flex flex-col items-center'>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

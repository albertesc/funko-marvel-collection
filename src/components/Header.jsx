import { useEffect, useState } from 'react'
import getWhishlistFunkos from '../services/getWhishlistFunkos'
import { Link } from 'react-router-dom'

export default function Header () {
  const [wishlist, setWishlist] = useState(getWhishlistFunkos())

  useEffect(() => {
    setWishlist(getWhishlistFunkos())
  }, [wishlist])

  return (
    <header className='h-16 mb-6'>
      <div className='container md:max-w-3xl h-full flex items-center justify-between'>
        <h1 className='text-xl'><span className='font-bold'>FunkoPop!</span>Marvel</h1>
        <nav className='flex space-x-8'>
          <Link to='/'>Colecciones</Link>
          <span className='relative'>
            <Link to='/wishlist'>
              Mi colección
            </Link>
            <span className='absolute left-full -top-1 text-xs bg-gray-500 flex items-center justify-center w-5 h-5 ml-1 rounded-full text-white'>
              {wishlist.length}
            </span>
          </span>
        </nav>
      </div>
    </header>
  )
}

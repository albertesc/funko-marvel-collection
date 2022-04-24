import { useEffect, useState } from 'react'
import Funko from '../components/Funko'
import getWhishlistFunkos from '../services/getWhishlistFunkos'

export default function Wishlist () {
  const [collection, setCollection] = useState(getWhishlistFunkos())

  useEffect(() => {
    setCollection(getWhishlistFunkos())
  }, [collection])

  return (
    <>
      <h1 className='text-xl my-8 font-semibold'>Mi colección</h1>
      <ul className='flex flex-wrap -mx-6'>
        {collection.length > 0
          ? collection.map(funko => <Funko key={funko.id} funko={funko} />)
          : <div className='px-6'><p>No tienes ningún producto en tu colección</p></div>}
      </ul>
    </>
  )
}

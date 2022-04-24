import { useContext } from 'react'
import CollectionContext from '../context/collectionContext'
import Funko from './Funko'

export default function FunkoList () {
  const { collection } = useContext(CollectionContext)

  return (
    <ul className='flex flex-wrap -mx-6'>
      {collection.lenght > 0 || collection !== null
        ? collection.map(funko => <Funko key={funko.id} funko={funko} />)
        : <div className='px-6'><p>No tienes ningún producto en tu colección</p></div>}
    </ul>
  )
}

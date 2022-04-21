import { useContext } from 'react'
import CollectionContext from '../context/collectionContext'
import Funko from './Funko'

export default function FunkoList () {
  const { collection } = useContext(CollectionContext)

  return (
    <ul className='flex flex-wrap items-center -mx-4 mb-16'>
      {collection !== null && collection.map(funko => <Funko key={funko.id} funko={funko} />)}
    </ul>
  )
}

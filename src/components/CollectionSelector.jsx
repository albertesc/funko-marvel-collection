import { useState, useContext } from 'react'
import getAllCollections from '../services/getAllCollections'
import getFunkosByCollection from '../services/getFunkosByCollection'
import CollectionContext from '../context/collectionContext'

export default function CollectionSelector () {
  const collections = getAllCollections()
  const [selectedOption, setSelectedOption] = useState(collections[0])
  const { setCollection } = useContext(CollectionContext)

  const handleChange = e => {
    setCollection(getFunkosByCollection(e.target.value))
    setSelectedOption(e.target.value)
  }

  return (
    <div className='my-6 text-xl font-semibold flex items-center mb-10'>Colección:
      <span className='flex items-center ml-4 w-auto border border-gray-700 px-3 py-1 rounded-md'>
        <select className='focus:outline-none appearance-none' value={selectedOption} onChange={handleChange}>
          {collections.length !== null && collections.map(collection => (
            <option key={collection} value={collection}>{collection}</option>
          ))}
        </select>
        <svg className='w-6 h-6 text-gray-700' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </span>
    </div>
  )
}

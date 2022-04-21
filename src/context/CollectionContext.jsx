import React, { useState } from 'react'
import getAllCollections from '../services/getAllCollections'
import getFunkosByCollection from '../services/getFunkosByCollection'

const CollectionContext = React.createContext({})

export function CollectionContextProvider ({ children }) {
  const [collection, setCollection] = useState(getFunkosByCollection(getAllCollections()[0]))

  return (
    <CollectionContext.Provider value={{ collection, setCollection }}>
      {children}
    </CollectionContext.Provider>
  )
}

export default CollectionContext

import FunkosList from '../components/FunkosList'
import CollectionSelector from '../components/CollectionSelector'
import { CollectionContextProvider } from '../context/collectionContext'

export default function Home () {
  return (
    <CollectionContextProvider>
      <CollectionSelector />
      <FunkosList />
    </CollectionContextProvider>
  )
}

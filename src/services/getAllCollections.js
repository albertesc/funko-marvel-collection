import db from '../db/db.json'

export default function getAllCollections () {
  const collections = [...new Set(db.map(funko => funko.collection))]
  return collections
}

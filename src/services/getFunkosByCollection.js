import db from '../db/db.json'

export default function getFunkosByCollection (collection) {
  const funkos = db.filter(funko => funko.collection === collection)

  return funkos
}

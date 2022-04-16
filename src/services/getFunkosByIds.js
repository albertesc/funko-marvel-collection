import db from '../db/db.json'

export default function getFunkosByIds (ids) {
  const funkos = db.filter(funko => ids.includes(funko.id))
  return funkos
}

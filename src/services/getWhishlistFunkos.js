import getFunkosByIds from './getFunkosByIds'

export default function getWhishlistFunkos () {
  const wishlist = JSON.parse(window.localStorage.getItem('wishlistFunkos'))
  if (wishlist) {
    const funkoIds = wishlist.map(funko => funko.funkoId)
    const funkos = getFunkosByIds(funkoIds)

    funkos.forEach(funko => {
      const { isBought } = wishlist.find(funkoInWishlist => funkoInWishlist.funkoId === funko.id)
      funko.isBought = isBought
    })

    return funkos
  }
  return []
}

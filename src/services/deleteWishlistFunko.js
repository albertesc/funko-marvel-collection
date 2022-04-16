export default function deleteWishlistFunko (funko) {
  const wishlistFunkos = window.localStorage.getItem('wishlistFunkos')
  const wishlistArray = JSON.parse(wishlistFunkos)
  const id = wishlistArray.findIndex(item => item.funkoId === funko.id)

  wishlistArray.splice(id, 1)

  window.localStorage.setItem('wishlistFunkos', JSON.stringify(wishlistArray))
}

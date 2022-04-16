export default function storeWishlistFunko (funko) {
  const wishlistFunkos = window.localStorage.getItem('wishlistFunkos')
  if (!wishlistFunkos) {
    window.localStorage.setItem('wishlistFunkos', JSON.stringify([{
      funkoId: funko.id,
      isBought: false
    }]))
  } else {
    const wishlistArray = JSON.parse(wishlistFunkos)

    if (!wishlistArray.find(item => item.funkoId === funko.id)) {
      wishlistArray.push({
        funkoId: funko.id,
        isBought: false
      })
      window.localStorage.setItem('wishlistFunkos', JSON.stringify(wishlistArray))
    }
  }
}

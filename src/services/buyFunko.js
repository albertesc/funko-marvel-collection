export default function buyFunko (funko) {
  const wishlistFunkos = JSON.parse(window.localStorage.getItem('wishlistFunkos'))
  const funkoInArray = wishlistFunkos.find(item => item.funkoId === funko.id)
  funkoInArray.isBought = !funkoInArray.isBought
  console.log(wishlistFunkos)
  window.localStorage.setItem('wishlistFunkos', JSON.stringify(wishlistFunkos))
}

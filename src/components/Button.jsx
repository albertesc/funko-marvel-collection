export default function Button ({ children, onClick, color }) {
  color === 'dark-gray' ? (color = 'bg-gray-700') : (color = 'bg-gray-500')

  return (
    <button className={`${color} px-3 py-2 block w-full text-sm text-white rounded-lg mt-2`} onClick={onClick}>
      {children}
    </button>
  )
}



function Card({ children, className }) {
  return (
    <div className={`${className} p-4 rounded-lg shadow-xl`}>
      {children}
    </div>
  )
}

export default Card

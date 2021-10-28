import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import MenuCustom from "../components/menu";

const Home = () => {
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex justify-center mb-40">
      <div className="max-w-screen-xl w-full h-full flex flex-col">
        <MenuCustom />
        <Link href={'/track-order'}>
          Abc
        </Link>
      </div>
    </div>
  )
}

export default Home

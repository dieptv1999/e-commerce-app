import Image from "next/image"
import {useRouter} from "next/router";
import constant from "../../utils/constant";

function CartProduct() {
  const router = useRouter()
  function gotoDetail() {
    router.push(`${constant.routes.PRODUCT}/1`)
  }

  return (
    <div className="w-full h-full p-3 flex flex-col items-center">
      <div className="rounded-md overflow-hidden cursor-pointer active:opacity-80" onClick={gotoDetail}>
        <Image
          src={'https://mockupgenerator.ap-south-1.linodeobjects.com/Mockups/Litalitee/0f58a402-f8ba-45e1-95ac-5ab4401bbc33-5000-front-ash.jpg'}
          width={200}
          height={215}
        />
      </div>
      <div className="my-2 text-lg font-semibold cursor-pointer hover:text-navy-blue name-product" onClick={gotoDetail}>Ao Trang</div>
      <div className="text-base font-semibold text-purple-600">$22.95 <span
        className="text-xs line-through text-gray-600">$26.39</span></div>
    </div>
  )
}

export default CartProduct

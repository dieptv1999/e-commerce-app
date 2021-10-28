import ButtonCustom from "../components/common/ButtonCustom";
import {FaChevronRight} from "react-icons/all";
import {useRouter} from "next/router";
import constant from "../utils/constant";
import MenuCustom from "../components/menu";

function Cart({}) {
  const router = useRouter()

  return (
    <div className="min-h-screen flex justify-center mb-40 m-head">
      <div className="max-w-screen-lg w-full h-full flex flex-col pb-6">
        <MenuCustom />
        <div className="m-4 mt-8 text-xl font-semibold self-start">My Shopping Cart</div>
        <ButtonCustom className="w-72 flex items-center justify-center text-lg font-semibold py-3"
                      onClick={router.push(constant.routes.CHECKOUT)}
        ><FaChevronRight className="mr-2"/>Proceed to Checkout</ButtonCustom>
      </div>
    </div>
  )
}

export default Cart

import ButtonCustom from "../components/common/ButtonCustom";
import {FaChevronRight, GrFormAdd, GrFormSubtract, RiAddFill, RiSubtractFill} from "react-icons/all";
import {useRouter} from "next/router";
import constant from "../utils/constant";
import MenuCustom from "../components/menu";
import DividerCustom from "../components/common/Divider";
import {useState} from "react";

function Cart({}) {
  const router = useRouter()

  function ProductItem() {
    const [amount, setAmount] = useState(1)

    return (
      <div className="w-full flex justify-between h-20 my-2">
        <div className="flex items-center">
          <img
            src={'https://mockupgenerator.ap-south-1.linodeobjects.com/Mockups/PODVirals_Local/d7a22a4c-d07f-4a94-a336-428ca249f48a-5000-front-white.jpg'}
            className="object-cover h-full"/>
          <div className="flex flex-col mx-2">
            <div className="font-semibold hover:text-red-700 cursor-pointer">Bulldog Puppy</div>
            <div className="text-gray-500">Unisex T-Shirt</div>
            <div className="text-gray-500">White - S</div>
            <div className="font-semibold">x $22.95</div>
          </div>
        </div>
        <div className="flex items-center">
          <RiSubtractFill
            className="cursor-pointer bg-light bg-opacity-30 text-primary rounded-full h-6 w-6 hover:opacity-80"
            onClick={() => setAmount(amount ? amount - 1 : 0)}/>
          <div className="mx-1 font-semibold text-base">{amount}</div>
          <RiAddFill
            className="cursor-pointer bg-light bg-opacity-30 text-primary rounded-full h-6 w-6 hover:opacity-80"
            onClick={() => setAmount(amount + 1)}/>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex justify-center mb-40">
      <div className="max-w-screen-lg w-full h-full flex flex-col pb-6">
        <MenuCustom/>
        <div className="m-4 mt-8 text-xl font-semibold self-start">My Shopping Cart</div>
        <DividerCustom size={2}/>
        <ProductItem/>
        <DividerCustom size={2}/>
        <ProductItem/>
        <DividerCustom size={4}/>
        <ButtonCustom className="w-72 flex items-center justify-center text-lg font-semibold py-3 self-center"
          onClick={() => router.push(constant.routes.CHECKOUT)}
        ><FaChevronRight className="mr-2"/>Proceed to Checkout</ButtonCustom>
      </div>
    </div>
  )
}

export default Cart

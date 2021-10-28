import BackTopCustom from "../../components/common/BackTop";
import Image from 'next/image'
import MenuCustom from "../../components/menu";
import DividerCustom from "../../components/common/Divider";
import ButtonCustom from "../../components/common/ButtonCustom";
import {Input} from "antd";
import {GiClockwork} from "react-icons/all";
import ColorPicker from "../../components/product/ColorPicker";
import {useState} from "react";
import SizeGuide from "../../components/product/SizeGuide";
import ListImagePreview from "../../components/product/ListImagePreview";

function ProductDetail() {
  const [color, setColor] = useState()
  const [size, setSize] = useState()

  return (
    <div className="min-h-screen flex justify-center mb-40">
      <BackTopCustom/>
      <div className="max-w-screen-xl w-full h-full flex flex-col pb-6 h-40">
        <MenuCustom/>
        <div className="w-full mt-6 flex">
          <div className="">
            <Image
              src={'https://mockupgenerator.ap-south-1.linodeobjects.com/Mockups/Litalitee/8265413a-5ebb-46be-8c5f-ddff41048323-5000p-front-white.jpg'}
              width={540}
              height={540}
              className="rounded overflow-hidden"
            />
          </div>
          <div className="flex-1 flex flex-col pl-3 md:pl-6 lg:pl-8">
            <div className="text-3xl font-semibold">Ao Trang</div>
            <div className="text-2xl font-semibold text-purple-600">$22.95 <span
              className="text-lg line-through text-gray-600">$26.39</span></div>
            <div className="text-base font-semibold my-2">Product: Unisex T-Shirt</div>
            <ListImagePreview/>
            <ColorPicker color={color} onChooseColor={setColor}/>
            <SizeGuide size={size} onChooseSize={setSize}/>
            <div className="name-item flex items-center">
              <div className="font-semibold">Quantity</div>
              <Input className="w-auto mx-2"/>
              <div className="text-primary whitespace-nowrap flex items-center text-lg font-semibold"><GiClockwork
                className="mr-1"/>18:22:51 left to buy
              </div>
            </div>
            <div className="self-center flex flex-col items-center my-3">
              <ButtonCustom className="w-72 font-semibold text-xl py-3 mb-1">Add To Cart</ButtonCustom>
              <div className="cursor-pointer text-purple-600">Please make sure to check the Size Guide!</div>
            </div>
            <div className="flex flex-col">
              <div className="text-base font-semibold">Campaign detail</div>
              <div>Bomb Power</div>
              <DividerCustom size={2}/>
            </div>
            <div className="flex flex-col">
              <div className="text-base font-semibold">Product detail</div>
              <div>Order today to get your items faster!

                *For EU customers: VAT is included in the price, you don't need to pay any extra fee for the delivery.
                Learn more about our shipping rates here and our returns, refunds, and exchanges policy here.
              </div>
              <DividerCustom size={2}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

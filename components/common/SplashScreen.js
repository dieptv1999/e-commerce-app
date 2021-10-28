import {Image} from "antd";

function SplashScreen() {
  return (
    <div className="absolute h-full w-full flex items-center justify-center z-50 bg-white">
      <Image src={'/lotties/shopping-cart.gif'} width={130} height={130}/>
    </div>
  )
}

export default SplashScreen

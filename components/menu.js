import {Space} from "antd";
import Link from "next/link"
import constant from "../utils/constant";

function MenuCustom() {
  return (
    <Space className="my-3 text-sm font-semibold text-gray-500" size={'middle'}>
      <Link href={constant.routes.TRACK_ORDER}>Track Order</Link>
      <Link href={`#`}>New Arrival</Link>
      <Link href={`#`}>Trending</Link>
    </Space>
  )
}

export default MenuCustom

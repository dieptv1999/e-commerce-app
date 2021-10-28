import {Divider} from "antd";

function DividerCustom({className, size}) {
  return (
    <Divider className={`${className} ${size === 1 && 'my-1'} ${size === 2 && 'my-2'} ${size === 4 && 'my-4'}`}/>
  )
}

export default DividerCustom

import {Button} from "antd";

function ButtonCustom(props) {
  return (
    <Button
      {...props}
      type={'primary'}
      className={`${props.className} h-auto border-none shadow-lg rounded-lg`}
    >{props.children}</Button>
  )
}

export default ButtonCustom

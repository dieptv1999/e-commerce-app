import {Modal} from "antd";
import ButtonCustom from "../common/ButtonCustom";
import {useState} from "react";

function SizeGuide({onChooseSize, size}) {
  const listSize = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex flex-col my-2">
      <div className="flex">
        <div className="text-base font-semibold mb-1 w-20">Size: {size}</div>
        <div className="flex-1 text-center underline text-primary cursor-pointer" onClick={() => setVisible(true)}>Size
          Guide
        </div>
      </div>
      <div className="flex">
        {listSize.map(s => <div
          className={`w-10 h-10 flex justify-center items-center mr-2 border rounded cursor-pointer ${s === size && 'border-primary'}`}
          onClick={() => onChooseSize(s)}>
          {s}
        </div>)}
      </div>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        title={'Hoodie'}
        footer={[
          <ButtonCustom>OK</ButtonCustom>
        ]}
      >
        <div className="flex">
          <img src={'/images/sizing-unisex-hoodie.png'} className="object-cover w-36"/>
        </div>
      </Modal>
    </div>
  )
}

export default SizeGuide

import Link from "next/link";
import Card from "../../components/common/Card";
import DividerCustom from "../../components/common/Divider";
import {Button, Form, Input, Space} from "antd";
import ButtonCustom from "../../components/common/ButtonCustom";
import {useRouter} from "next/router";
import constant from "../../utils/constant";
import MenuCustom from "../../components/menu";

function TrackOrder() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex justify-center mb-40">
      <div className="max-w-screen-xl w-full h-full flex flex-col pb-6">
        <MenuCustom />
        <Card className="p-0">
          <div>
            <div className="m-4 text-xl font-semibold">Track your order</div>
            <DividerCustom/>
            <Form className="name-item p-4" layout={'vertical'}>
              <Form.Item
                name="order_number"
                label={"Order Number"}
                required={true}

              >
                <Input/>
                <span className="text-gray-400">You can find it in the order confirmation email!</span>
              </Form.Item>
              <Space>
                <ButtonCustom>Track my order</ButtonCustom>
                <ButtonCustom onClick={() => router.push(constant.routes.CONTACT_US)}>I don't know my Order
                  Number</ButtonCustom>
              </Space>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  return {
    props: {},
  }
}

export default TrackOrder

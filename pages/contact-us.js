import Card from "../components/common/Card";
import DividerCustom from "../components/common/Divider";
import {Form, Input} from "antd";
import ButtonCustom from "../components/common/ButtonCustom";
import constant from "../utils/constant";

function ContactUs({}) {
  function onFinish(values) {}

  return (
    <div className="min-h-screen flex justify-center mb-40 m-head">
      <div className="max-w-screen-xl w-full h-full flex flex-col py-6">
        <Card className="p-0">
          <div className="flex flex-col items-center w-full">
            <div className="m-4 text-xl font-semibold self-start">Send us your enquiries</div>
            <DividerCustom/>
            <Form className="name-item p-4 max-w-screen-md w-full" layout={'vertical'} id="contact_us" onFinish={onFinish}>
              <Form.Item
                name="name"
                label={"Name"}
                required={true}

              >
                <Input placeholder="Enter your name"/>
              </Form.Item>
              <Form.Item
                name="phone"
                label={"Phone"}
                required={true}

              >
                <Input placeholder="Enter your phone"/>
              </Form.Item>
              <Form.Item
                name="email"
                label={"Email Address"}
                required={true}

              >
                <Input placeholder="Enter your email"/>
              </Form.Item>
              <Form.Item
                name="message"
                label={"Your message"}
                required={true}

              >
                <Input.TextArea/>
              </Form.Item>
            </Form>
            <DividerCustom/>
            <div className="max-w-screen-md w-full">
              <ButtonCustom className="mt-3 mx-3" htmlType="submit" key="submit" form="contact_us">Submit</ButtonCustom>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ContactUs

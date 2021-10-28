import {FUNDING, PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import axios from "axios";

function Checkout({}) {

  const captureMutation = async (data) => axios.post('/api/paypal/captureOrder', data)
  const createPayPalOrder = async () => {
    console.log("create Order")
    let response = await axios.post('/api/paypal/createOrder')
    return response.data.orderID
  }

  const onApprove = async (data) => {
    return captureMutation.mutate({orderID: data.orderID})
  }

  return (
    <div className="min-h-screen flex justify-center mb-40">
      <div className="max-w-screen-xl w-full h-full flex flex-col py-6 h-40">
        <PayPalScriptProvider
          options={{
            'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            currency: 'PHP',
          }}
        >
          <PayPalButtons
            style={{
              color: 'gold',
              shape: 'rect',
              label: 'pay',
              height: 50,
            }}
            fundingSource={FUNDING.PAYPAL}
            createOrder={createPayPalOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default Checkout

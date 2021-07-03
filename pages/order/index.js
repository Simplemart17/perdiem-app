import { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/layout'
import { logout } from '../../middleware/utils'
import OrderCard from '../../components/orderCard'
import Select from '../../components/select'

const OrderPage = () => {
  const [order, setOrder] = useState([])
  const [subscriptionId, setSubscriptionId] = useState('1')
  const [editProfile, setEditProfile] = useState(false)
  const option = ['Weekly', 'Monthly', 'Quarterly', 'Yearly']

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`/api/order/${subscriptionId}`)
      setOrder(data.data)
    }

    fetch()
  }, [subscriptionId])

  return (
    <Layout
      title="App | Order Page"
      setEditProfile={setEditProfile}
      editProfile={editProfile}
      logout={logout}
      gotoProfile={true}
    >
      <div className="pt-10 px-14">
        <Select
          name="subscription"
          description="Select your subscription"
          className="w-72"
          options={option}
          onChange={(event) => setSubscriptionId(event.target.value)}
        />
      </div>
      <div className="grid gap-2 py-10 text-center md:grid-cols-2 lg:grid-cols-3 px-14 sm:mx-auto">
        {order.length ? (
          order.map((data, index) => (
            <OrderCard
              key={index}
              productName={data.product_name}
              productImage={data.product_image}
              productCount={data.quantity}
            />
          ))
        ) : (
          <div>No order found!</div>
        )}
      </div>
    </Layout>
  )
}

export default OrderPage

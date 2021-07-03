import ORDER from '../../../data/order.json'

export default function auth(req, res) {
  const { subscriptionId } = req.query

  const order = ORDER.flatMap((data) =>
    data.subscription_id === +subscriptionId ? [...data.products] : [],
  )

  return res.status(200).json({ success: true, data: order })
}

import Image from 'next/image'
const OrderCard = (props) => {
  const { productName, productImage, productCount } = props

  return (
    <div className="m-0 bg-gray-300 shadow-lg rounded-xl">
      <div className="flex justify-center items-center h-48 rounded-t-[12px] overflow-hidden">
        <Image
          src={productImage}
          alt="product"
          width={1000}
          height={1000}
          className="flex-none w-full"
        />
      </div>
      <p className=" pt1-0 px-3 text-left overflow-hidden font-normal text-2xl text-[#2d448f] whitespace-nowrap">
        {productName}
      </p>

      <p className="pb-1 text-right px-4 text-[40px] font-light leading-[3px] text-[#323C47]">
        {productCount}
        <span className="ml-2 text-lg text-[#4F4F4F]">{'Qty'}</span>
      </p>
    </div>
  )
}

export default OrderCard

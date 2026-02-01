import React from 'react'
import { useProduct } from './src/components/ProductContext'
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function ProductPage() {
    const { products } = useProduct();
    const params = useParams();
    const currProduct = products.filter(p => p.productId == params.productId)
    
  return (
    <>
      <div className="bg-amber-50 h-full grid grid-cols-12 gap-3 grid-rows-6">
        <div className="col-start-2 row-start-2 col-span-3 row-span-3 rounded-2xl p-2 bg-white">
          <img src={currProduct[0].productUrl} className=" rounded-2xl" />
        </div>
        <div className="col-span-7 rounded-2xl row-start-2 row-span-3 flex flex-col justify-around items-center p-2 bg-amber-100">
                  <h1 className='underline m-1 text-2xl font-serif italic font-extrabold'>{currProduct[0].productName}</h1>
                  <p>{currProduct[0].productDesc}</p>
                  <span>{`₹ `+currProduct[0].productPrice}</span>
                  <button className='flex justify-center items-center p-4 bg-white hover:border-2 rounded-2xl font-bold '>Add To Cart <FaShoppingCart className='inline' /></button>
        </div>
      </div>
    </>
  );
}

export default ProductPage
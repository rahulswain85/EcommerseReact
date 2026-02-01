import { FaShoppingCart } from "react-icons/fa";

function ProductCard({
  productId,
  productUrl,
  productName,
  productPrice,
  productDesc,
  productCategory
}) {
  return (
    <>
      <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-102 hover:shadow-xl w-72">
        <div className="h-48 overflow-hidden rounded-t-xl">
          <img
            src={productUrl}
            alt={productName}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">{productCategory}</span>

          <p className="text-lg font-bold text-black truncate block capitalize">
            {productName}
          </p>

          <p className="text-sm text-gray-500 my-2 line-clamp-2">
            {productDesc}
          </p>

          <div className="flex items-center justify-between mt-3">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {`₹ ` + productPrice}
            </p>

            <button className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

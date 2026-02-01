
import { useUser } from './UserContext';
import { useProduct } from './ProductContext';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

function Home() {

  

  const { loggedinUser } = useUser();
  const { products } = useProduct();
  return (
    <>
      <div className="grid grid-cols-12 gap-1 grid-rows-6 min-h-screen">
        <div className="md:col-span-3 md:row-span-6 flex flex-col overflow-auto row-span-2 col-span-12 bg-blue-50">
          <h1 className="text-center px-1 py-3 m-3 text-xl font-extrabold font-mono bg-amber-100 rounded-2xl ">
            {loggedinUser
              ? `Welcome, ` + loggedinUser.userName
              : `Visting as a Guest`}
          </h1>
        </div>

        <div className="md:col-span-9 col-span-12 row-span-6 bg-amber-50">
          <div className="flex flex-row gap-6 m-2 flex-wrap justify-center items-center">
            {products.map((product) => (
              <ProductCard
                
                key={product.productId}
                productId={product.productId}
                productUrl={product.productUrl}
                productName={product.productName}
                productPrice={product.productPrice}
                productDesc={product.productDesc}
                productCategory={product.productCategory}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
import { createContext, useContext, useEffect, useState } from 'react'


export const ProductContext = createContext(null);

export function ProductProvider({children}) {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products))
    },
        [products, setProducts]);

    function addProduct(newProduct){
        setProducts((prev) => [...prev, newProduct]);
    }

    const values = {products, addProduct}
  return (
      <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export function useProduct() {
    const context = useContext(ProductContext);
    return context;
}
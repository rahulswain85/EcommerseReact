import { useRef, useState } from 'react';
import { useUser } from './UserContext';
import { IoIosAddCircle } from "react-icons/io";
import { useProduct } from './ProductContext';
import { MdDelete } from "react-icons/md";
import { CiEdit } from 'react-icons/ci';

function Admin() {
    const addFormRef = useRef(null);
    const { loggedinUser, users } = useUser();
    const { addProduct, products } = useProduct(); 

    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productUrl, setProductUrl] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productPrice, setProductPrice] = useState("");

    function openAddProductForm() {
        addFormRef.current?.showModal();
    }

    function closeAddProductForm() {
        addFormRef.current?.close();
    }

    function handleAddProduct(e) {
        e.preventDefault();

        const newProduct = {
            productId: Date.now(),
            productName: productName,
            productUrl: productUrl,
            productDesc: productDesc,
            productPrice: productPrice,
            productCategory: productCategory
        }

        addProduct(newProduct);

        setProductCategory("");
        setProductDesc("");
        setProductName("");
        setProductUrl("");
        setProductPrice("");

        closeAddProductForm();

    }

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
          <h1 className="text-center sm:text-2xl text-md font-extrabold underline font-mono mt-2">
            Admin Dashboard
          </h1>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-2 p-2 m-2 bg-orange-100 rounded-xl sm:min-h-50">
            <div className="bg-sky-100 flex flex-col flex-wrap hover:scale-103 rounded-2xl px-4 py-10 sm:w-[25%] sm:h-[90%] h-[95%] w-full justify-center items-center">
              <p className="font-mono font-bold md:text-xl text-md">
                Customers
              </p>
              <p>{users.length - 1}</p>
            </div>
            <div className="bg-sky-100 flex flex-col flex-wrap hover:scale-103 px-4 py-10 sm:w-[25%] w-full sm:h-[90%] h-[95%] rounded-2xl justify-center items-center">
              <p className="font-mono font-bold text-xl md:text-xl text-md">
                Products
              </p>
              <p>{products.length}</p>
            </div>
            <div className="bg-sky-100 flex flex-col flex-wrap hover:scale-103 px-4 py-10 sm:w-[25%] w-full sm:h-[90%] h-[95%] rounded-2xl justify-center items-center">
              <p className="font-mono font-bold text-xl md:text-xl text-md">
                Orders
              </p>
              <p>--</p>
            </div>
            <div className="bg-sky-100 flex flex-col flex-wrap hover:scale-103 px-4 py-10 rounded-2xl sm:w-[25%] sm:h-[90%] h-[95%] w-full justify-center items-center">
              <p className="font-mono font-bold text-xl md:text-xl text-md">
                Revenue
              </p>
              <p>--</p>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-3 p-2 m-1">
            <div className="sm:col-span-1 col-span-2 sm:row-span-2 row-span-1 h-90 overflow-auto w-full p-2 bg-pink-50 rounded-2xl">
              <h1 className="text-center text-xl font-bold sticky top-0.5 p-2 bg-pink-50">
                Manage Products
                <button
                  id="openAddProduct"
                  onClick={openAddProductForm}
                  className="ml-4"
                >
                  <IoIosAddCircle className="inline size-6 hover:text-gray-500" />
                </button>
              </h1>
              {products.map((p) => (
                <div
                  key={p.productId}
                  className="flex flex-row justify-evenly items-center w-full rounded-2xl bg-orange-50 gap-5 mt-2"
                >
                  <img src={p.productUrl} className="w-10 h-full" />
                  <div className="flex flex-col justify-evenly px-5 items-start border-r w-full flex-wrap ">
                    <p className="font-bold">{p.productName}</p>
                    <p>{p.productCategory}</p>
                    <p className="italic text-sm">{`₹ ` + p.productPrice}</p>
                  </div>
                  <div className="flex flex-row justify-evenly py-8 items-center gap-2">
                    <CiEdit className="text-yellow-500 size-6" />
                    <MdDelete className="text-red-600 size-6" />
                  </div>
                </div>
              ))}
              <div></div>
            </div>

            <div className="sm:col-span-1 col-span-2 sm:row-span-2 row-span-1 h-90 overflow-auto w-full bg-green-50 p-2 rounded-2xl">
              <h1 className="text-center text-xl font-bold sticky top-0.5 p-2">
                Manage Customers
              </h1>
              {users.map((user) =>
                user.userType != "Admin" ? (
                  <div
                    key={user.userId}
                    className="flex flex-row flex-wrap justify-evenly items-center w-full rounded-2xl bg-white gap-5 mt-2"
                  >
                    <div className="flex flex-col justify-evenly px-5 items-start border-r  flex-wrap ">
                      <p>{user.userName}</p>
                      <p>{user.userEmail}</p>
                      <p>{user.userType}</p>
                    </div>
                    <div className="flex flex-row justify-evenly py-8 items-center gap-2">
                      <CiEdit className="text-yellow-500 size-6" />
                      <MdDelete className="text-red-600 size-6" />
                    </div>
                  </div>
                ) : null,
              )}
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <dialog
        ref={addFormRef}
        id="addProduct"
        className="m-auto backdrop:backdrop-blur-sm md:w-[50%] w-full rounded-2xl hidden open:flex flex-col"
      >
        <form
          className="w-full flex flex-col p-2 justify-center items-center"
          onSubmit={(e) => handleAddProduct(e)}
        >
          <h1 className="text-xl font-bold font-mono text-center">
            Add a new Product
          </h1>
          <div className="bg-black/20 flex flex-col justify-center gap-2 w-full rounded-xl m-2 p-6">
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Product Name"
              name="productName"
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            />

            <input
              type="text"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              placeholder="Product Image URL"
              name="productURL"
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            />

            <textarea
              type="text"
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              placeholder="Describe the product"
              name="productDesc"
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            />
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Clothing">Clothings</option>
              <option value="Electronics">Electronics</option>
              <option value="Gaming">Gaming</option>
              <option value="Books">Books</option>
            </select>

            <input
              type="text"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Enter Product Prise"
              name="productPrise"
              className="bg-amber-50 rounded-lg py-1 text-center focus:outline-lg focus:outline-amber-500"
            />
            <div className="flex flex-row gap-2 justify-center items-center">
              <button
                type="button"
                onClick={closeAddProductForm}
                className="bg-white text-black hover:bg-gray-500 hover:text-white font-bold px-4 py-2 rounded-full"
              >
                Cancle
              </button>
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-500 hover:text-black font-bold px-4 py-2 rounded-full"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Admin
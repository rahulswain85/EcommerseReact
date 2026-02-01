import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Layout
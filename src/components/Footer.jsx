import React from 'react'

function Footer() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-4 italic gap-1">

        <div className="col-span-4 row-span-3">
          <div className="flex flex-col flex-wrap justify-center items-center p-6">
            <h3 className="font-bold">Socials</h3>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>X</span>
          </div>
        </div>

        <div className="col-span-4 row-span-3">
          <div className="flex flex-col flex-wrap justify-center items-center p-6">
            <h3 className="font-bold">Socials</h3>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>X</span>
          </div>
        </div>

        <div className="col-span-4 row-span-3">
          <div className="flex flex-col flex-wrap justify-center items-center p-6">
            <h3 className="font-bold">Socials</h3>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>X</span>
          </div>
        </div>

        <div className='row-span-1 col-span-12 text-center italic font-bold text-sm'>Made with learnings 🧑‍💻</div>
      
      </div>
    </>
  );
}

export default Footer
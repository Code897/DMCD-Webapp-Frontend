import React, { useState } from 'react'
import Footer from './Footer/Footer'
import ContactPopUp from './PopUps/ContactPopUp'

const LandingPage = () => {

  const [hideContact, setHideContact] = useState(true);

  const contactInfo = () => {
    setHideContact(!hideContact);
  };
  return (
    <>
      <div className='flex px-5 justify-center items-center flex-col' style={{ backgroundImage: `url('https://img.freepik.com/free-photo/close-up-new-york-traffic_23-2150868240.jpg?t=st=1706327318~exp=1706330918~hmac=d5b4bef19fe2659b93fdaec27678f28b2817d098568fe4b24a5bd337a658c643&w=360')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='flex text-white lg:mt-36 md:mt-20 mt-16 lg:text-lg text-xl'>DRIVEMYCARDRIVER</div>
        <div className='text-yellow-100 font-serif lg:block hidden lg:text-8xl text-4xl italic my-16'>Your Ride,Your Rules <br></br> We Drive, You Enjoy.</div>
        <div className='text-yellow-100 font-serif lg:hidden text-7xl italic my-14'>Your Ride,<br></br>Your Rules <br></br> We Drive,<br></br> You Enjoy.</div>
        <div className='lg:grid grid-cols-3 lg:mb-11 mb-5'>
          <div className='text-white lg:pl-72 lg:pr-96 px-0 col-span-2 tracking-widest'>"DriveMyCarDriver in Jamshedpur - Your key to effortless travel. Expert drivers, reliable service, ensuring smooth journey through the streets of jamshedpur"</div>
          <div className=' mt-0 mb-2 col-span-1'>
            <div className='text-green-500'>
              <a href="https://api.whatsapp.com/send?phone=+917546910766&text="
                target="_blank"
                rel="noopener noreferrer"
                className='lg:hidden'
              >
                <button className='border-2 rounded-full p-3 mt-4'>Contact on Whatsapp</button>
              </a>
              <button className='lg:block hidden border-2 rounded-full px-14  py-2' onClick={contactInfo}>Contact on Whatsapp</button>{hideContact ? null : <ContactPopUp />}
            </div>
            <div className='text-white mt-2 lg:pl-14 pl-0'>Available in Jamshedpur</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage
import React from 'react'
import b1 from '../../Assets/amazon.png';
import b2 from '../../Assets/amd.png';
import b3 from '../../Assets/cisco.png';
import b4 from '../../Assets/dropcam.png';
import b5 from '../../Assets/logitech.png';
import b6 from '../../Assets/spotify.png';

const Layout4 = () => {
  return (
    <div className='w-full bg-white p-10'>
        <div className='w-full justify-center flex'>
            <p className='font-poppins font-medium text-lightgray text-[1rem] pb-4'>Trusted by the world’s best</p>
        </div>
        <div className='flex justify-evenly mt-[1rem] pb-20'>
                <img src={b1} alt='' className='w-[5rem]'></img>
                <img src={b2} alt='' className='w-[5rem] h-[2rem]'></img>
                <img src={b3} alt='' className='w-[5rem]'></img>
                <img src={b4} alt=''></img>
                <img src={b5} alt=''></img>
                <img src={b6} alt=''></img>
        </div>
    </div>
  )
}

export default Layout4
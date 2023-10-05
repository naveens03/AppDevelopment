import React from 'react'
import Navbar from '../components/Navbar';
import Layout1 from './HomeComponents/Layout1';
import Layout2 from './HomeComponents/Layout2';
import Layout3 from './HomeComponents/Layout3';
import Layout4 from './HomeComponents/Layout4';
// import Layout5 from './HomeComponents//Layout5';
// import Layout6 from './HomeComponents/Layout6';
import Layout7 from './HomeComponents/Layout7';
import Layout8 from './HomeComponents/Layout8';
import Footer from './HomeComponents/Footer';
const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Layout1/>
      <Layout2/>
      <Layout3/>
      <Layout4/>
      {/* <Layout5/>
      <Layout6/> */}
      <Layout7/>
      <Layout8/>
      <Footer/>
    </div>
  )
}

export default Home
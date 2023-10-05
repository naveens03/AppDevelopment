import React from 'react'
import Navbar from '../components/Navbar';
import Layout1 from './Login/Home/Layout1';
import Layout2 from './Login/Home/Layout2';
import Layout3 from './Login/Home/Layout3';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Layout1/>
      <Layout2/>
    </div>
  )
}

export default Home
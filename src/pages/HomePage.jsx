import React from "react";

import About from '../components/About'
import AndalousSect1 from '../components/AndalousSect1'
import PlatesImages from '../components/PlatesImages'
import BookTable from '../components/BookTable'
import GlovoCLa from '../components/GlovoCLa'
import PreFooterParlx from '../components/PreFooterParlx';
import MainContent from '../components/MainContent.jsx'

const  HomePage = () => {
  return (
    <main>
      <MainContent />
      <About />
      <AndalousSect1 />
      <PlatesImages />
      <BookTable />
      <GlovoCLa />
      <PreFooterParlx />
      
    </main>
  )
}

export default HomePage;

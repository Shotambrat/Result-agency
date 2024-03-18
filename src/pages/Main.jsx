import React from 'react'
import Cover from '../components/Main/Cover';
import MainService from '../components/Main/MainService';
import MainCases from '../components/Main/MainCases';
import HowWeWork from '../components/Main/HowWeWork';



const Main = () => {
  return (
    <div>
      <Cover />
      <MainService />
      <MainCases />
      <HowWeWork />
    </div>
  )
}

export default Main

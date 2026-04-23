import React from 'react'
import SideNav from '../components/SideNav'
import DashBoardItem from '../components/DashBoardItem'

const DashBoard = () => {
  return (
       <div className="home md:flex overflow-y-auto w-full bg-slate-50
      md:h-screen md:overflow-hidden md:py-0  py-15  main ">
        {" "}
        {/* <div className="shrink-0 hidden md:block">
        <SideNav/>
        </div> */}

      <div className="md:flex-1 md:p-4 w-full pt-0 md:h-screen  ">
        <DashBoardItem/>
      </div>
    </div>
  )
}

export default DashBoard
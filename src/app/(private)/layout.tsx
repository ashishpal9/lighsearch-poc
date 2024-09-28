"use client"

import Sidebar from "@/component/hoc/LayoutComponent/Sidebar";
import Header from "@/component/hoc/LayoutComponent/Header";
// import Footer from "@/component/hoc/LayoutComponent/Footer";
import { useState } from "react";

interface PrivateLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {

  const [isActive, setIsActive] = useState(true);

  return (
    <main className={isActive ? "site-wrapper" : "site-wrapper site-wrapper-active"} >

      <Sidebar setIsActive={setIsActive} isActive={isActive} />
      <Header setIsActive={setIsActive} isActive={isActive} />
      <div className="main-cont-wrapper">
        {children}
      </div>
      {/* <Footer /> */}
    </main>
  )
}

export default PrivateLayout;
import React from 'react'
import MiddleHeader from "./MiddleHeader.tsx"
import TopNavbar from "./TopNavbar.tsx"

const Header = () => {
  return (
    <>
      <div style={{position: "fixed", top: 0, zIndex: 10000, width: "100%" }}>
      <TopNavbar />
      <MiddleHeader />
    </div>
    </>
  )
}

export default Header

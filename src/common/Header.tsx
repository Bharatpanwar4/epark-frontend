'use client'

import ThemeController from "./ThemeController"

const Header = () => {
  return (
    <div className="w-full bg-white   text-center sticky top-0 headerGlass py-2 ">
        <div className="flex items-center justify-center">
        <ThemeController/>
        </div>
     
    </div>
  )
}

export default Header
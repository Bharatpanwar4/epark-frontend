'use client'

import { ShoppingCart, UserRound } from "lucide-react"
import ThemeController from "./ThemeController"

const Header = () => {
  return (
    <header className="w-full bg-white   text-center sticky top-0 headerGlass py-2 ">
        <nav className="flex items-center justify-between container" >
            <div>
E-park
            </div>
            <div className="flex items-center gap-8">
             
                <div className="flex items-center gap-1">
                    <ShoppingCart/>
                    <p className="hidden md:block">Cart</p>
                </div>
                <div className="flex items-center gap-1">
                    <UserRound/>
                    <p className="hidden md:block" >Sign In</p>
                </div>

                <div>
                <ThemeController/>

                </div>
            </div>
        </nav>
     
    </header>
  )
}

export default Header
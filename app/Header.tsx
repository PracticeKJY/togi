"use client"

import Image from "next/image"
import logo from "@/public/logo-d-white.png"

const Header = () => {
  return (
    <header className="border-t border-white  mt-[50px] md:mt-[90px] h-[15vh] relative flex justify-between">
      <Image
        src={logo}
        alt="logo"
        width={72}
        height={78}
        className="mt-[40px] h-[78px]"
      />
      <p className="text-white font-bold text-xl md:text-3xl cursor-pointer pt-[12px] md:pt-[26px]">
        togi
      </p>
    </header>
  )
}

export default Header

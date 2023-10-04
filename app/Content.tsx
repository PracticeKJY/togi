"use client"

import logo from "@/public/logo-d-white.png"
import foodiverse from "@/public/desktop-foodiverse.png"
import iden from "@/public/desktop-iden.png"
import gigakitchen from "@/public/desktop-gigakitchen.png"

import Image from "next/image"
import Link from "next/link"
import FakeBackground from "./FakeBackground"
import Header from "./Header"
import Main from "./body/Main"
import Section1 from "./body/Section1"
import Product from "./body/Product/Product"
import Footer from "./Footer"

const Content = () => {
  return (
    <div>
      <div>
        <div className="w-full ">
          <div className="max-w-[353px] min-w-[300px] mx-auto px-[10px] md:max-w-[1440px]">
            <FakeBackground />
            <main className="min-h-0 h-[65vh] select-none ">
              <Header />
              <section className="w-full h-full overflow-scroll scrollbar-hide snap-y snap-mandatory ">
                <Main />
                <Section1 />
                <Product />
                <article></article>
                <article></article>
                <article></article>
              </section>
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

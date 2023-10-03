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

const Content = () => {
  return (
    <div className="w-full">
      <div className="max-w-[353px] min-w-[300px] mx-auto px-[10px] md:max-w-[1440px]">
        <FakeBackground />
        <main className="min-h-0 h-[65vh] select-none">
          <Header />
          <section className="w-full h-full overflow-scroll overflow-y-scroll snap-y snap-mandatory">
            <Main />
            <Section1 />
            <Product />
            <article></article>
            <article></article>
            <article></article>
          </section>
          <div className="border-t border-white md:w-full pt-[13px] md:pt-[22px] relative flex justify-between ">
            <div>
              <p className="footer-brand-name">togi</p>
              <p className="footer-items">주식회사 토기</p>
              <p className="footer-items">
                서울시 영등포구 여의대로 108, 파크원 타워1 4층
              </p>
              <p className="footer-items">+82 10 4182 0929 inc@togi.co</p>
              <p className="footer-items">
                대표이사: 최영덕 사업자등록번호: 899-86-02362
              </p>
              <p className="footer-items">
                Copyright © 2022, Togi Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Content

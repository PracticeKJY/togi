"use client"

import foodiverse from "@/public/desktop-foodiverse.png"
import iden from "@/public/desktop-iden.png"
import gigakitchen from "@/public/desktop-gigakitchen.png"

import description from "./description"
import ProductItem from "./ProductItem"

const Product = () => {
  return (
    <article className="body-products">
      <div className="flex justify-between">
        <div className="my-10">
          <h2 className="body-h2-nonBorder">PRODUCTS</h2>
        </div>
        <div className="flex flex-col justify-center">
          {description.map((list, index) => {
            return (
              <ProductItem
                key={list.id}
                titleNo={list.titleNo}
                src={list.src}
                title={list.title}
                eng={list.eng}
                kor={list.kor}
              />
            )
          })}
          {/* <ProductItem titleNo={"01"} src={foodiverse} title={"foodiverse"} />
          <ProductItem titleNo={"02"} src={iden} title={"iden"} />
          <ProductItem titleNo={"03"} src={gigakitchen} title={"gigakitchen"} /> */}
        </div>
      </div>
    </article>
  )
}

export default Product

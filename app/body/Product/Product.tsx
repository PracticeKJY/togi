"use client"

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
          {description.map((list) => {
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
        </div>
      </div>
    </article>
  )
}

export default Product

"use client"

import { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface ProductItemProps {
  titleNo: string
  title: string
  src: StaticImageData
  eng: string
  kor: string
}

const ProductItem: FC<ProductItemProps> = ({
  titleNo,
  title,
  src,
  eng,
  kor,
}) => {
  return (
    <div className="body-products-items">
      <div className="flex flex-col relative">
        <div className="text-white text-[14px] font-bold border-white border-b pb-[2px]">
          {titleNo}
        </div>
        <div>
          <Link href="/" className="body-products-link">
            <Image
              src={src}
              alt={title}
              className="body-products-image"
              width={328}
              height={100}
            />
          </Link>
        </div>
      </div>
      <div className="body-products-description">
        <div className="flex pt-0 border-white border-b pb-[2px]">
          <p className="font-bold text-[14px] text-white  pl-[17px] ">
            {title}
          </p>
        </div>
        <div className=" pl-[17px]">
          <p className="body-products-description-p whitespace-pre-wrap">
            {eng}
          </p>
          <p className="text-[12px] leading-[16px] opacity-80 font-light text-white mt-[5px] whitespace-pre-wrap">
            {kor}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem

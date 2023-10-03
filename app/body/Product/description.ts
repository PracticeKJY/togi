import foodiverse from "@/public/desktop-foodiverse.png"
import iden from "@/public/desktop-iden.png"
import gigakitchen from "@/public/desktop-gigakitchen.png"
import { StaticImageData } from "next/image"

interface descriptionProps {
  titleNo: string
  title: string
  src: StaticImageData
  eng: string
  kor: string
}

const description = [
  {
    id: "0",
    titleNo: "01",
    src: foodiverse,
    title: "foodiverse",
    eng: "Mobile app that re-defines healthy eating\nby making meal curation simple and sustainable",
    kor: "식단관리를 게임처럼 손쉽게, 재미있게, 지속 가능하게 할 수 있도록 도와주는\nAI 기반 개인 맞춤형 밀프렙 큐레이션 및 커머스 플랫폼",
  },
  {
    id: "1",
    titleNo: "02",
    src: iden,
    title: "iden",
    eng: "AI-enabled social media marketing solution aimed to help\nF&B businesses with little access to big data",
    kor: "외식업계 소상공인 및 프랜차이즈의\n데이터 기반 SNS 마케팅을 돕는 B2B AI 솔루션",
  },
  {
    id: "2",
    titleNo: "03",
    src: gigakitchen,
    title: "gigakitchen",
    eng: "Cooking optimization software to make\nback-of-the-house operations efficient & scalable",
    kor: "주방에서의 조리 순서 최적화 및 조리 데이터 통계 분석을 통해\n매출 상승을 돕는 AI 기반 FoodOps 솔루션",
  },
]

export default description

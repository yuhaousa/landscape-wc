"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/modern-landscape-garden-with-geometric-design-and-.jpg",
    title: "打造您的绿色生态空间",
    subtitle: "现代几何设计与自然生态的完美融合",
    description: "从概念设计到施工完成，我们提供全方位的园林景观解决方案，让每一寸土地都焕发生机",
  },
  {
    image: "/modern-corporate-office-garden-with-water-feature.jpg",
    title: "商业空间景观设计",
    subtitle: "提升企业形象的绿色名片",
    description: "为企业打造专业的办公环境，融合现代设计理念与生态环保原则",
  },
  {
    image: "/residential-community-garden-with-children-playgro.jpg",
    title: "住宅社区园林规划",
    subtitle: "创造宜居的生活环境",
    description: "为居民提供舒适的休闲空间，注重功能性与美观性的完美结合",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full min-h-[72vh] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 landscape-gradient opacity-40" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <Badge className="mb-6 bg-white/20 text-white border-white/30">专业园林设计 · 15年经验</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{slides[currentSlide].title}</h1>
        <h2 className="text-xl md:text-2xl mb-4 text-white/90 font-medium">{slides[currentSlide].subtitle}</h2>
        <p className="text-lg md:text-xl mb-8 text-white/80 text-pretty max-w-2xl mx-auto">
          {slides[currentSlide].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            查看项目案例
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            免费咨询
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="上一张"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="下一张"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`切换到第${index + 1}张`}
          />
        ))}
      </div>
    </section>
  )
}
